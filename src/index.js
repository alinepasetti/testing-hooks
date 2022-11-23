import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page404';
import { PostsProvider } from './contexts/PostsProvider';
import { Post } from './templates/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/abc" element={<Abc />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  </React.StrictMode>,
);
