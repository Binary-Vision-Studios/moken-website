import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import HeaderMobile from './components/Header/components/HeaderMobile'
import Footer from './components/Footer'
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const {width} = useWindowDimensions()

  const [isOpen, setIsOpen] = useState(false);

  return (
      <Router>
        <div style={{overflowY: isOpen ? 'hidden' : 'scroll', height: '100vh'}}>
          {width >= 600 ?
              <Header isOpen={isOpen} setIsOpen={setIsOpen}/> :
              <HeaderMobile setIsOpen={setIsOpen} isOpen={isOpen}/>
          }

          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/about">About</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  {/*<About />*/}
                </Route>
                <Route path="/users">
                  {/*<Users />*/}
                </Route>
                <Route path="/">
                  <span>Home</span>
                  {/*<Home />*/}
                </Route>
              </Switch>
            <Footer isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      </Router>
  );
}

export default App;
