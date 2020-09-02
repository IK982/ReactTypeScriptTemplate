import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export function Member() {
    return (
      <div>
        <h2>Member</h2>
      </div>
    );
  }

 export function MemberId() {
    let { id } = useParams();
    return (
        <div>
            <h2>Member</h2>
            <h3>The current Member Id is: {id}</h3>
        </div>
    );
}