import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


interface Member {
  name: string;
  email: string;
}
interface MemberProps{
  member: Member;
}
interface SearchResultProps {
  members: Member[];
}

export function AllMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/members")
    .then(response => response.json())
    .then(json => setMembers(json.members))
  }, [])


  if (members.length === 0) {
    return <div>No Members</div>
  }
  const memberList = members.map((member) => {
    return <MemberItem member={member}></MemberItem>
  })
    return (
      <div>
        <h2>All Members</h2>
        <button ><a className="book-link" href = "http://localhost:3000/members/add-member">Add Members</a></button><br></br><br></br>
        <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label><br></br>
        <ul>
          {memberList}
        </ul>
      </div>
    );
  }



const MemberItem = ({member}: MemberProps) => {
return <li>{member.name}, {member.email}</li>
}


