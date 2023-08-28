/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React from "react";
import { pizzaData } from "./data";

function App() {
  return (
    <>
      <div className="container ">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're Currently Open ");
  // } else {
  //   alert("Sorry We're Clossed");
  // }
  console.log(hour);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currenlty Open
    </footer>
  );
}

function Test() {}

function Pizza(props) {
  console.log(props.photoName);
  console.log(props.name);
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingrident}</p>
        <span>{props.price + 4}</span>
      </div>
    </li>
  );
}

export default App;
