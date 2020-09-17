import React, { Fragment, Suspense } from 'react';
import { Link, NavLink, Route, withRouter } from 'react-router-dom';
import Home from './Screens/Home';

function App(props) {
  console.log(props.location);
  return (
    <div className="">
      <header className="topnav">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/cpnj">CNPJ</NavLink>
        <NavLink to="/rectangles">Rectangles</NavLink>
        <NavLink to="/todolist">To Do List</NavLink>
        <NavLink to="/worldclock">World Clock</NavLink>
        <NavLink to="/diagram">Diagram (Order Management)</NavLink>
      </header>
      <Fragment>
        <Suspense fallback={
            <div className="loader-container">
                <div className="loader-container-inner">
                    <h6 className="mt-5">
                        Carregando
                        <small>Quase lá</small>
                    </h6>
                </div>
            </div>
        }>
            <Route path="/" component={Home} />
        </Suspense>
      </Fragment>
    </div>
  );
}

export default withRouter(App);
