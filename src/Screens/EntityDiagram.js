import React, { Fragment } from 'react';
import Diagram from '../Assets/Images/KaffaDB-Diagram.png';

function EntityDiagram() {
  return (
    <Fragment>
      <div className="App">
        <h2>8) Entity Relationship Diagram - Simple Order Manager</h2>
        <img src={Diagram} alt="Entity Relationship Diagram Scheme" className="img-diagram"/>
        <p>
          Hello World! My name is <code>Rennan Ribas</code> and I like to do that all.
        </p>
        <a
          className="App-link"
          href="https://github.com/rennanrr"
        >
        </a>
      </div>
    </Fragment>
  )
}

export default EntityDiagram;