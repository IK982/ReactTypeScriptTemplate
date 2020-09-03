import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";


export function AddNewBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const history = useHistory();
    function submitForm(event: FormEvent) {
        event.preventDefault();
        const data = {
            title: title,
            author: author
        }
        fetch ("http://localhost:3001/books/new" , {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        })
        .then (() => {history.push("/books")})
    }

    return (
        <form onSubmit={submitForm}>
            {/* <label htmlFor="isbn"> ISBN
                <input type = "text" value = "ISBN"/>
            </label>
            <label htmlFor="publisher"> Publisher
                <input type = "text" value = "Publisher"/>
            </label> */}
            <label htmlFor="title"> Title
            <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
            </label>
            <label htmlFor="author"> Author
            <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
            </label>
            {/* <label htmlFor="cover_image_url"> Cover Image Url
            <input type = "text" value = "cover_image_url"/>
            </label>
            <label htmlFor="publisher"> Publisher
                <input type = "text" value = "Publisher"/>
            </label> */}
            <button type="submit">Submit</button>
        </form>
    )
}