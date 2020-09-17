import React, { Fragment, Suspense } from 'react';
import logo from '../logo.svg';

function Home() {
  return (
    <div className="App">
      <h2>This is a Pre-qualification test</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello World! My name is <code>Rennan Ribas</code> and I like to do that all.
      </p>
      <a
        className="App-link"
        href="https://github.com/rennanrr"
        target="_blank"
      >
      </a>
    </div>
  )
}

export default Home;