import React, { Fragment, Suspense, lazy } from 'react';
import { NavLink, Redirect, Route, withRouter } from 'react-router-dom';
import logo from './Assets/Icons/logo.svg';

const Home = lazy(() => import('./Screens/Home'));
const Cnpj = lazy(() => import('./Screens/Cnpj'));
const Rectangles = lazy(() => import('./Screens/Rectangles'));

function LoadMessage(props) {
  return (
    <div className="loader-container">
      <div className="loader-container-inner">
          <h6 className="mt-5">
            Loading {props.name} Screen
            <small>You are almost there...</small>
            <img src={logo} className="App-logo" alt="logo" />
          </h6>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="">
      <header className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/cnpj">CNPJ</NavLink>
        <NavLink to="/rectangles">Rectangles</NavLink>
        <NavLink to="/todolist">To Do List</NavLink>
        <NavLink to="/worldclock">World Clock</NavLink>
        <NavLink to="/diagram">Diagram (Order Management)</NavLink>
      </header>
      <Fragment>

        {/* Home Screen */}
        <Suspense fallback={
          <LoadMessage name={"Home"}></LoadMessage>
        }>
            <Route path="/home" component={Home} />
        </Suspense>

        {/* CNPJ Validation Screen */}
        <Suspense fallback={
          <LoadMessage name={"CNPJ Validation"}></LoadMessage>
        }>
            <Route path="/cnpj" component={Cnpj} />
        </Suspense>

        {/* CNPJ Validation Screen */}
        <Suspense fallback={
          <LoadMessage name={"Rectangles"}></LoadMessage>
        }>
            <Route path="/rectangles" component={Rectangles} />
        </Suspense>

        {/* In case of root '/' path, redirect to home */}
        <Route exact path="/" render={() => (
                <Redirect to="/home"/>
        )}/>
      </Fragment>
    </div>
  );
}

export default withRouter(App);
