import { useParams, useSearchParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Post = () => {
  const {
    postsState: { posts },
  } = useContext(PostsContext);
  const [post, setPost] = useState({});

  const params = useParams();
  const [queryStrings] = useSearchParams();
  console.log(queryStrings.get('search'));

  const setPostCB = useCallback(
    (id) => {
      setPost(posts.find((p) => Number(p.id) === Number(id)));
    },
    [posts],
  );
  useEffect(() => {
    setPostCB(params.id);
  }, [setPostCB, params.id]);

  return <div>{post.title}</div>;
};
