/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React from "react";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas && (
        <>
          <p>
            Authentic Italian cuisine.6 creative dishes to choose from.All from
            our stone over, all organic and delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>We are Open until {closeHour}:00. Come visit us order online.</p>

        <button className="btn">Order Now</button>
      </div>
    </footer>
  );
}

// eslint-disable-next-line no-unused-vars
function Test() {}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingrident}</p>
       <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price+4}</span>
      </div>
    </li>
  );
}

export default App;
