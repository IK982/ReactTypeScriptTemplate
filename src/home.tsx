import React from 'react';
import './hero.scss';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h3 className="text-style">UK Top Ten Books in 2020</h3>
      <div className="container">
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/91tidZzKfnL.jpg" alt=""/>
        <img className="size" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565987894l/52230114._SX318_SY475_.jpg" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/81hOVPPkvBL.jpg" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/61zZqo5p7zL.jpg" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/71LQsh3NlNL.jpg" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/919E9230RDL.jpg" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/817GAJ7nY1L.jpg" alt=""/>
        <img className="size" src="https://images.penguinrandomhouse.com/cover/9780399562488" alt=""/>
        <img className="size" src="https://images-na.ssl-images-amazon.com/images/I/41co7ojYQYL._SX309_BO1,204,203,200_.jpg" alt=""/>
        <img className="size" src="https://cdn.waterstones.com/bookjackets/large/9781/7842/9781784295028.jpg" alt=""/>

      </div>
    </div>
  );
}


{/* <h3 class="text-style">UK Top Ten Books in 2020</h3>
<div>

  <div class="container">
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/91tidZzKfnL.jpg" />
    <img class="size" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565987894l/52230114._SX318_SY475_.jpg" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/81hOVPPkvBL.jpg" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/61zZqo5p7zL.jpg" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/71LQsh3NlNL.jpg" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/919E9230RDL.jpg" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/817GAJ7nY1L.jpg" />
    <img class="size" src="https://images.penguinrandomhouse.com/cover/9780399562488" />
    <img class="size" src="https://images-na.ssl-images-amazon.com/images/I/41co7ojYQYL._SX309_BO1,204,203,200_.jpg" />
    <img class="size" src="https://cdn.waterstones.com/bookjackets/large/9781/7842/9781784295028.jpg" />
  </div>
</div> */}