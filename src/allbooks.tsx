import React, { useState, useEffect} from 'react';
import './App.scss';

interface Book {
  id: number;
  title: string;
  author: string
}

interface SearchResultProps {
  books: Book[];
}
interface BookProps {
  book: Book;
}

export function AllBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("Loading")

  useEffect(() => {
    setMode("Loading")
    fetch(`http://localhost:3001/books?search=${search}`)
      .then(response => response.json())
      .then(json => setBooks(json.books))
      .then(() => { setMode("Ready") })
  }, [search]);


  return (
    <div>
      <h1>All Books</h1>
      <button ><a href = "http://localhost:3000/books/add-books">Add Books</a></button><br></br><br></br>
      <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label><br></br>
      
      {mode === "Ready" && <SearchResults books={books}></SearchResults>}
      {mode === "Loading" && <p>Loading</p>}
    </div>
  );
}

const BookListItem = ({ book }: BookProps) => {
  return <li > <a href ={`http://localhost:3000/books/${book.id}`}>{book.author},{book.title}</a></li>

};

function SearchResults({books}: SearchResultProps) {
  const bookList = books.map((book) => {
    return <BookListItem book={book}></BookListItem> 
  })

  if (books.length === 0) {
    return (
      <p>No Results</p>
    )
  }
  return (
    <section><br></br>
      <ul>
        {bookList}
      </ul>
    </section>

  )
}



