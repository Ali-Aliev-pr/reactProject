import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function Page(props) {
    return (
        <>
            <div>
                <p>{props.text}</p>
            </div>
        </>
    )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
            {/*<nav>*/}
                <Link to="/">Main Page</Link>
                <Link to="/first">First</Link>
                {/*<Link to="second">Second</Link>*/}
            {/*</nav>*/}
            <div className="container">
                <Switch>
                    <Route path="/first">
                        <Page text="hhhh"/>
                    </Route>
                </Switch>
            </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;