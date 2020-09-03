import React, { useState, useEffect } from 'react';

import './App.scss';
import {
    BrowserRouter as Router,
    
    useParams
} from "react-router-dom";



// export function Book() {
//     return (
//       <div>
//         <h2>Book</h2>
//       </div>
//     );
//   }

// export function BookId() {
//     let { id } = useParams();
//     return (
//         <div>
//             <h2>Book</h2>
//             <h3>The current Book Id is: {id}</h3>
//         </div>
//     );
// }
interface BookDetails {
    title: string;
    author: string;
    cover_image_url: string;
    published_date: string;
    publisher: string;
    isbn: string;

}

interface RouteParams {
    id: string;
}


// export function BookInformation() {
//     const [bookinfo, setBookInfo] = useState<BookDetails>({ title: '', author: '', cover_image_url: '', published_date: '', publisher: '', isbn: '' });
    
export function BookInformation() {
    const [bookinfo, setBookInfo] = useState<BookDetails | null >(null);
    
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(json => setBookInfo(json.book))
    });

    if(!bookinfo) {
        return <div>Loading</div>
    }
    return (
        <div>
            <h2>Book</h2>
            <h3>The current Book Id is: {id}</h3>
            <section>
                <div> Title: {bookinfo.title} </div>
                <div> Author: {bookinfo.author} </div>
                <div> Book Cover: {bookinfo.cover_image_url} </div>
                <div> Date Published: {bookinfo.published_date} </div>
                <div> Publisher: {bookinfo.publisher} </div>
                <div> ISBN: {bookinfo.isbn} </div>
                <div> 

                <a href={bookinfo.cover_image_url}></a>
                </div>

            </section>


        </div>
    )
}



// interface BookItemProps{
//     bookItem: BookDetails;
// }
// const BookDetailItem = ({bookItem}: BookItemProps) => {
// return <li>{bookItem.title}, {bookItem.author}, {bookItem.cover_image_url}, {bookItem.published_date}, {bookItem.publisher}, {bookItem.isbn}</li>
// }
