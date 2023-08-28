import Funghi from "./pizzas/funghi.jpg";
import React from "react";

function App() {
  return (
    <>
      <div>
        <h1>Hello React</h1>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return <h1>Fast React Pizza Co</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour>=openHour && hour <=closeHour;
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're Currently Open ");
  // } else {
  //   alert("Sorry We're Clossed");
  // }
  console.log(hour);
  return (
    <footer>{new Date().toLocaleTimeString()}. We are currenlty Open</footer>
  ); 
}

const Test = () => {};

function Pizza() {
  return (
    <>
      <img src={Funghi} alt="Funghi" />
      <p>Funghi Pizza</p>
    </>
  );
}

export default App;
