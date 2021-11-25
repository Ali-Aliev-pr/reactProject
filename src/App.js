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
            <Route path="/" component={Main}/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;