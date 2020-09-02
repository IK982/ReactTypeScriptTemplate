import React from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export function Book() {
    return (
      <div>
        <h2>Book</h2>
      </div>
    );
  }

export function BookId() {
    let { id } = useParams();
    return (
        <div>
            <h2>Book</h2>
            <h3>The current Book Id is: {id}</h3>
        </div>
    );
}