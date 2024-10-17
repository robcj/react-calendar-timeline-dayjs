import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-calendar-timeline-css';
import App from './app';

const render = (AppToRender) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppToRender />);
};
render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    render(NextApp);
  });
}
