import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.scss';

interface Book {
  title: string;
  author: string
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
      <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label>
      {mode === "Ready" && <SearchResults books={books}></SearchResults>}
      {mode === "Loading" && <p>Loading</p>}
    </div>
  );
}

interface BookProps {
  book: Book;
}
const BookListItem = ({ book }: BookProps) => {
  return <li>{book.author}, {book.title}</li>

};

interface SearchResultProps {
  books: Book[];
}

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
    <section>

      <h2>All Books</h2>
      <ul>
        {bookList}
      </ul>
    </section>

  )
}






// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// function QuerySearch() {
//   let query = useQuery();
//   return
// }
// function SearchBook() {
//   const [searchTerm, setSearchTerm] =useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const handleChange = event => { setSearchTerm(event.target.value);
//   };
//   useEffect(()=> {
//     const results = BookListItem.filter(booksearch => booksearch.toLowerCase().includes(searchTerm)
//     );
//     setSearchTerm(results);
//   } , [searchTerm]);
//   return (
//     <div>
//       <input 
//       type="text"
//       placeholder="Search"
//       value={searchTerm}
//       onChange={handleChange}/>
//     <ul>
//     {searchResults.map(item => (
//       <li>{item}</li>
//     ))}
//     </ul>
//     </div>
//   )
// }