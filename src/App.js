import './App.css';
import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Page from './Page'
import Header from "./header/Header";
import Main from "./main/main";
import Man from "./man/Man";
import Woman from "./woman/Woman";


function App() {

  return (
      <>
      <BrowserRouter>
        <div className="container">
            <Header/>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/man">Man</Link>
                <Link to="woman">Woman</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/man">
                    <Man/>
                </Route>
                <Route path="/woman">
                    <Woman/>
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;