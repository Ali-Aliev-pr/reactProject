import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Page from './Page'
import logo from './img.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
            <nav>
                <div className="navContainer">
                    <Link to="/" className="hello"><img src={logo}/></Link>
                    <Link to="/first" className="hello">First</Link>
                    <Link to="/second" className="hello">Second</Link>
                </div>
            </nav>
            <div className="container">
                <Switch>
                    <Route path="/first/">
                        <Page text="hhhh"/>
                    </Route>
                    <Route path="/second/">
                        <Page text="oooppoppopopopooppoop"/>
                    </Route>
                </Switch>
            </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;