import { useContext, useEffect, useRef } from 'react';
import { incrementCounter } from '../../contexts/CounterProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const {
    postsState: { posts, loading },
    postsState,
    postsDispatch,
  } = useContext(PostsContext);

  const { counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);
  return (
    <>
      {loading && <p>LOADING...</p>}
      {!loading &&
        posts.map((p) => (
          <p onClick={() => incrementCounter(counterDispatch)} key={p.id}>
            {p.title}
          </p>
        ))}
    </>
  );
};
