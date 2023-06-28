import React from 'react';
import ReactDOM from 'react-dom/client';

function Page() {
  return React.createElement('div', null, [
    React.createElement('h1', null, `Hello ${Date().toLocaleString()}`),
    React.createElement(
      'p',
      null,
      'The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.'
    ),
    React.createElement('button', null, 'Learn more'),
  ]);
}

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

setInterval(function () {
  root.render(Page());
}, 1000);
