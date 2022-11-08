import './App.css';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('filho');
  return <p>{post.title}</p>;
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('pai');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="App">
      <h1>oi</h1>
      <input
        value={value}
        onChange={useCallback((e) => setValue(e.target.value), [])}
      />
      {useMemo(
        () =>
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
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
};

export default App;
