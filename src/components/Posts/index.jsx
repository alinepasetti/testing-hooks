import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const {
    postsState: { posts, loading },
    postsDispatch,
  } = useContext(PostsContext);

  const navigate = useNavigate();
  useEffect(() => {
    isMounted.current = true;
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);
  return (
    <>
      {loading && <p>LOADING...</p>}
      {!loading &&
        posts.map((p) => (
          <p
            onClick={() => navigate(`/post/${p.id}?search=tudoazul`)}
            key={p.id}
          >
            {p.id + ' ' + p.title}
          </p>
        ))}
    </>
  );
};
