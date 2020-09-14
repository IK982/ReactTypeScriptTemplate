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
import { MemberInformation } from './member';
import { AllMembers } from './allmembers';
import {AddNewBook} from './AddBook';
import {AddNewMember} from './AddMember';

function App() {
    return (

        <Router>
            <header className="App-header">
                <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />
                {/* <a className="App-link"></a> */}

            </header>
            <div>
                <div className="div">
                    <nav className="nav-bar">
                        <ul className="links">
                            <li >
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/books/1">Book</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/books">All Books</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/books/add-book">Add Books</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/members/1">Member</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/members">All Members</Link>
                            </li>
                            <li >
                                <Link className="nav-link" to="/members/add-member">Add Members</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/books/add-book">
                        <AddNewBook />
                    </Route>
                    <Route path="/books/:id">
                        <BookInformation />
                    </Route>
                    <Route path="/books">
                        <AllBooks />
                    </Route>
                    <Route path="/members/add-member">
                        <AddNewMember />
                    </Route>
                    <Route path="/members/:id">
                        <MemberInformation />
                    </Route>
                    <Route path="/members">
                        <AllMembers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>

                <div className="footer">
                <footer className="footer-text">app built by India and Humphrey</footer>
                </div>


            </div>
        </Router>
    );
}

export default App;