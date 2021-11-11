import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function PageSon(props) {
    let style = {
        position: 'absolute',
        marginTop: 100
    }
    return (
        <>
            <p style={style}>{props.name}</p>
        </>
    )
}

function Page(props) {
    return (
        <>
            <BrowserRouter>
                <main>
                    <div className="page">
                        <p>{props.text}</p>
                        <Link to="/first/0">Next</Link>
                    </div>
                </main>
                <div>
                    <Switch>
                        <Route path="/first/0">
                            <PageSon name="Hello Son"/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    )
};

export default Page;