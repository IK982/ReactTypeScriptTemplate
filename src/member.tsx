import React, { useState, useEffect } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

interface MemberDetails {
  name: string;
  email: string;
  deleted: boolean;
}

export function MemberInformation() {
  const [memberInfo, setMemberInfo] = useState<MemberDetails | null>(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/members/${id}`)
      .then(response => response.json())
      .then(json => setMemberInfo)
  });

  if (!memberInfo) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Member</h2>
      <h3>The current Member Id is: {id}</h3>
      <section>
        <div>Name: {memberInfo.name}</div>
        <div>Email: {memberInfo.email}</div>
        {/* <div>Deleted: {memberItem.deleted}</div> */}
      </section>
    </div>

  )
}

