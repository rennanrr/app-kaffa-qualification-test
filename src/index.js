import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
      <HashRouter>
        <Component />
      </HashRouter>,
    rootElement
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
