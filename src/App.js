import logo from './logo.svg';
import React, { createContext, useEffect, useState } from "react";
import './App.css';
import Home from './components/Home/Home';
import OurCoatches from './components/OurCoatches/OurCoatches';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
export const buildContext = createContext()

function App() {
  const [dataCounts, setDataCounts] = useState([])
  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setDataCounts(data))
  }, [])
  return (
    <buildContext.Provider value={{ dataCounts, setDataCounts }}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Courses">
              <Courses></Courses>
            </Route>
            <Route path="/ourcoatches">
              <OurCoatches></OurCoatches>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div >
    </buildContext.Provider>
  );
}

export default App;
