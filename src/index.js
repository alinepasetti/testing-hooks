import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route index path="/" element={<App />} exact />
      <Route path="/abc/:slug" element={<Abc />} />
      <Route path="/abc/:slug/:id" element={<Abc />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);
