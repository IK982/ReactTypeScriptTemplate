import React from 'react';

import './App.scss';
import './hero.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { Home } from './home';
import { Book } from './books';
import { AllBooks } from './allbooks';
import { Member } from './member';
import { AllMembers } from './allmembers';


function App() {
    return (
        <Router>
            <div >
                <div className="div">

                    <nav className="ul">
                        <ul className="ul">
                            <li className="li">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="li">
                                <Link to="/books/1" >Book</Link>
                            </li>
                            <li className="li">
                                <Link to="/books">All books</Link>
                            </li>
                            <li className="li">
                                <Link to="/members/1">Member</Link>
                            </li>
                            <li className="li">
                                <Link to="/members">All members</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>

                    <Route path="/books/:id" >
                        <Book /> {<BookId />}
                    </Route>
                    <Route path="/books">
                        <AllBooks />
                    </Route>
                    <Route path="/members/:id">
                        <Member /> {<MemberId />}
                    </Route>
                    <Route path="/members">
                        <AllMembers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <header className="App-header">
                    <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />

                    <a className="App-link">

                    </a>
                </header>
                <footer>app built by India and Humphrey</footer>
            </div>
        </Router>

    );
}
function BookId() {
    let { id } = useParams();
    return (
        <div>
            <h3>The current Book Id is: {id}</h3>
        </div>
    );
}

function MemberId() {
    let { id } = useParams();
    return (
        <div>
            <h3>The current Member Id is: {id}</h3>
        </div>
    );
}
export default App;