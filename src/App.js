import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Page from './Page'
import Header from "./header/Header";
import Main from "./main/main";

function App() {

  return (
      <>
      <BrowserRouter>
        <Header/>
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/page">
                    <Page/>
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;