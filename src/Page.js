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
                        <p>Hello World!</p>
                    </div>
                </main>
            </BrowserRouter>
        </>
    )
};

export default Page;