import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Interface } from 'readline';


interface Book {
  title: string;
  author: string
}


export function AllBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/books?search=${search}`)
      .then(response => response.json())
      .then(json => setBooks(json.books))

  }, [search]);


  if (books.length === 0) {
    return <div>Loading</div>
  }
  const bookList = books.map((book ) => {
    return <BookListItem book={book}></BookListItem>
    
  })

  // const updateSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newSearch = event.target.value
  //   setSearch(newSearch);

  // }
  return (
    <div>
      <h2>All Books</h2>
      <label>
        <input type="text" value={search} onChange= {(event) => { setSearch(event.target.value)}}/>
        {/* // onChange= {updateSearch} */}
        
      </label>
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