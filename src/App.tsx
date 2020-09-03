import React from 'react';
import './App.scss';
import './hero.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from './home';
import { BookInformation } from './books';
import { AllBooks } from './allbooks';
import { MemberId } from './member';
import { AllMembers } from './allmembers';

function App() {
    return (

        <Router>
            <header className="App-header">
                <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />
                {/* <a className="App-link"></a> */}

            </header>
            <div>
                <div className="div">
                    <nav className="ul">
                        <ul className="ul">
                            <li className="li">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="li">
                                <Link to="/books/1">Book</Link>
                            </li>
                            <li className="li">
                                <Link to="/books">All Books</Link>
                            </li>
                            <li className="li">
                                <Link to="/members/1">Member</Link>
                            </li>
                            <li className="li">
                                <Link to="/members">All Members</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/books/:id">
                        <BookInformation />
                    </Route>
                    <Route path="/books">
                        <AllBooks />
                    </Route>
                    <Route path="/members/:id">
                        <MemberId />
                    </Route>
                    <Route path="/members">
                        <AllMembers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>

                <footer>app built by India and Humphrey</footer>

            </div>
        </Router>
    );
}

export default App;