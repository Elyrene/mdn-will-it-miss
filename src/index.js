import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

//获取 DOM 容器
const container = document.getElementById('app');

//创建根
const root = createRoot(container);

//渲染应用
root.render(<App />);

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
