import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Country from './Country';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        <header>

{/*
          <div id="navbar">
            <span>Where in the World?</span>
            <span>Light Mode</span>
          </div>
          <div id="filter">
            <div id="search">search</div>
            <div id="region-filter">filter by region</div>
          </div>
        </header>

        <main id="all-countries">
          <div id="pharse">In the world we have 250 countries</div>
          <Country />
        </main>
        <footer>
        </footer>
      </div>

  */}
    </header>
    </div>
    </Router>
  );
}

export default App;
