import React, { useState, useEffect } from 'react';

import './App.scss';
import {
    BrowserRouter as Router,
    
    useParams
} from "react-router-dom";


interface BookDetails {
    title: string;
    author: string;
    cover_image_url: string;
    published_date: string;
    publisher: string;
    isbn: string;

}


export function BookInformation() {
    const [bookItem, setBookItem] = useState<BookDetails | null>(null);
    
    let { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
        .then(response => response.json())
        .then(json => setBookItem(json.book))
    });
    
    if(!bookItem) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>Book</h2>
            <h3>The current Book Id is: {id}</h3>
            <section>
                <div> Title: {bookItem.title} </div>
                <div> Author: {bookItem.author} </div>
                <div> Date Published: {bookItem.published_date} </div>
                <div> Publisher: {bookItem.publisher} </div>
                <div> ISBN: {bookItem.isbn} </div>
                <div> 
                    <img src = {bookItem.cover_image_url}/>
                </div>

            </section>


        </div>
    )
}









// export function BookInformation() {
//     const [bookinfo, setBookInfo] = useState<BookDetails>({ title: '', author: '', cover_image_url: '', published_date: '', publisher: '', isbn: '' });

// interface BookItemProps{
    //     bookItem: BookDetails;
// }
// const BookDetailItem = ({bookItem}: BookItemProps) => {
// return <li>{bookItem.title}, {bookItem.author}, {bookItem.cover_image_url}, {bookItem.published_date}, {bookItem.publisher}, {bookItem.isbn}</li>
// }
