import React, { useState, FormEvent } from 'react';
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";


export function AddNewMember() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    function submitForm(event: FormEvent) {
        event.preventDefault();
        const data = {
            name: name,
            email: email
        }

        fetch("http://localhost:3001/members/new", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => { history.push("/members") })
    }

    return (

        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <label htmlFor="email"> Email
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <button type="submit">Submit</button>

        </form>
    )
}
