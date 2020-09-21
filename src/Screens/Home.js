import React, { Fragment } from 'react';
import logo from '../Assets/Icons/logo.svg';

function Home() {
  return (
    <Fragment>
      <div className="App">
        <h2>This is a Pre-qualification test</h2>
        <img src={logo} className="img-spining" alt="logo" />
        <p>
          Hello World! My name is <code>Rennan Ribas</code>.
        </p>
        <a
          className="App-link"
          href="https://github.com/rennanrr"
        >
          My GitHub Repo
        </a>
      </div>
    </Fragment>
  )
}

export default Home;