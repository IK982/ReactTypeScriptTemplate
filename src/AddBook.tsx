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
    const [datepublished, setDatePublished] = useState("");
    const [isbn, setIsbn] = useState("");
    const [publisher, setPublisher] = useState("");
    const [coverimage, setCoverImage] = useState("")

    const history = useHistory();


    function submitForm(event: FormEvent) {
        event.preventDefault();
        const data = {
            title: title,
            author: author,
            datepublished: datepublished,
            isbn: isbn,
            publisher: publisher,
            coverimage: coverimage
        }
        fetch("http://localhost:3001/books/new", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(() => { history.push("/books") })

    }
    const setSearch = (event : FormEvent) => {
        event.preventDefault();

        fetch(`http://localhost:3001/books/by-isbn/${isbn}`)
            .then(response => response.json())
            .then(json => {
                setTitle(json.title)
                setAuthor(json.author)
                setDatePublished(json.publishDate)
                setPublisher(json.publisher)
                setCoverImage(json.coverImageUrl)
            })
    }

    return (
        <section>
            <form onSubmit={setSearch}>
                <label htmlFor="isbn"> ISBN
                    <input type="text" value={isbn} onChange={event => setIsbn(event.target.value)} />

                </label>
                <button>Search</button>
            </form>


            <form onSubmit={submitForm}>
                <label htmlFor="title"> Title
                    <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
                </label>
                <label htmlFor="author"> Author
                    <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
                </label>
                <label htmlFor="published_date"> Date Published
                    <input type="text" value={datepublished} onChange={event => setDatePublished(event.target.value)} />
                </label>
                {/* <label htmlFor="isbn"> ISBN
                    <input type="text" value={isbn} onChange={event => setIsbn(event.target.value)} />
                </label> */}
                <label htmlFor="publisher"> Publisher
                    <input type="text" value={publisher} onChange={event => setPublisher(event.target.value)} />
                </label>
                <label htmlFor="cover_image_url"> Cover Image Url
                    <input type="text" value={coverimage} onChange={event => setCoverImage(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}