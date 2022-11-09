import './App.css';
import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import P from 'prop-types';

const Post = ({ post, getTitle }) => {
  console.log('filho');
  return <p onClick={() => getTitle(post.title)}>{post.title}</p>;
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);
  console.log('pai');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  useEffect(() => {
    contador.current++;
  });

  const getTitle = (title) => {
    console.log(title);
    setValue(title);
    input.current.focus();
  };

  return (
    <div className="App">
      <h6>Renderizou: {contador.current}x</h6>
      <h1>oi</h1>
      <input
        ref={input}
        value={value}
        onChange={useCallback((e) => setValue(e.target.value), [])}
      />
      {useMemo(
        () =>
          posts.map((post) => {
            return <Post getTitle={getTitle} key={post.id} post={post} />;
          }),
        [posts],
      )}
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    title: P.string,
  }),
  getTitle: P.func,
};

export default App;
