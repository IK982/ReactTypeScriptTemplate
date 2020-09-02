import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Interface } from 'readline';

interface Book {
  title: string;
  author: string
}


export function AllBooks() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(response => response.json())
      .then(json => setBooks(json.books))

  }, [])


  if (books.length === 0) {
    return <div>Loading</div>
  }
  const bookList = books.map((book ) => {
    return <BookListItem book={book}></BookListItem>
    
  })
  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {bookList}
      </ul>
    </div>
  );
}

interface BookProps {
  book: Book;
}
const BookListItem = ({book}: BookProps) => {
  return <li>{book.author}, {book.title}</li>

}