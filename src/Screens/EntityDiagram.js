import React, { Fragment } from 'react';
import Gist from 'react-gist';
import DiagramImg from '../Assets/Images/KaffaDB-Diagram.png';
import SelectImg from '../Assets/Images/select-innerjoin.png';

const EntityDiagram = () => {
  return (
    <Fragment>
      <div className="App">
        <h2>8) Entity Relationship Diagram - Simple Order Manager</h2>
        <img src={DiagramImg} alt="Entity Relationship Diagram Scheme" className="img-diagram"/>
        <p>
          Bellow is the SQL queries to create and migrate some example data to DB.
        </p>
        <Gist id="003bbb3f10dc1e13ce12f956e8535332"></Gist>
        <p>
          Bellow, you will find the SQL query to list ORDERS with number of items:
        </p>
        <Gist id="a41e53c3bb9674ffe144d772be437701"></Gist>
        <p>The response is:</p>
        <img src={SelectImg} alt="Entity Relationship Diagram Scheme" className="img-diagram"/>
      </div>
    </Fragment>
  )
}

export default EntityDiagram;