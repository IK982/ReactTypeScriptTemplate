import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


interface Member {
  id: number;
  name: string;
  email: string;
}
interface MemberProps {
  member: Member;
}
interface SearchResultProps {
  members: Member[];
}

export function AllMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("Loading")

  useEffect(() => {
    setMode("Loading")
    fetch(`http://localhost:3001/members?search=${search}`)
      .then(response => response.json())
      .then(json => setMembers(json.members))
      .then(() => { setMode("Ready") })
  }, [search]);

  return (
    <div className="center">
      <h1>All Members</h1>
      <button ><a className="book-link" href="http://localhost:3000/members/add-member">Add Members</a></button><br></br><br></br>
      <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label><br></br>

      {mode === "Ready" && <SearchResults members={members}></SearchResults>}
      {mode === "Loading" && <p>Loading...</p>}

    </div>
  );
}
const MemberItem = ({ member }: MemberProps) => {
  return <li className="padding"><a className="book-link" href={`http://localhost:3000/members/${member.id}`}>{member.name}, {member.email}</a></li>
};

function SearchResults({ members }: SearchResultProps) {
  const memberList = members.map((member) => {
    return <MemberItem member={member}></MemberItem>
  })
  if (members.length === 0) {
    return (
      <div>No Members</div>
    )
  }
  return (
    <div>
      <ul className="ul">
        {memberList}
      </ul>
    </div>
  );
}







