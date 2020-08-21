import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const familyMembers = [
    "Kasem Bapari",
    "Sajo Begum",
    "Anisur Rahman",
    "Hosneara Begum",
    "Arif Hossain",
    "Simla Akter",
  ];
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illestretor", price: "$69.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Premeir El", price: "$249.99" },
  ];
  const friends = [
    { name: "Abdul Karim", catagory: "Best Friend", time: "10 years" },
    { name: "Abu Hassan", catagory: "Child Friend", time: "12 years" },
    {
      name: "Salim Hossen",
      catagory: "Child and Best Friend",
      time: "28 years",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {friends.map((friend) => (
          <Friend description={friend}></Friend>
        ))}

        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}

        {/* <Person name="Masrafi Bin Mortoza" position="Captain"></Person>
        <Person name="Sakib Al Hasan" position="All-Rounder"></Person>
        <Person name="Mostafizur Rahman" position="Fast Boller"></Person> */}
        {/* <Family
          name={familyMembers[2]}
          father={familyMembers[0]}
          mother={familyMembers[1]}
          partner={familyMembers[3]}
        ></Family>
        <Family
          name={familyMembers[4]}
          father={familyMembers[2]}
          mother={familyMembers[3]}
          partner={familyMembers[5]}
        ></Family> */}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Friend(props) {
  const friendStyle = {
    border: "1px solid blue",
    borderRadius: "5px",
    backgroundColor: "gray",
    height: "200px",
    width: "200px",
    margin: "10px",
    color: "lightgreen",
  };
  const { name, catagory, time } = props.description;
  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h5>{catagory}</h5>
      <h5>{time}</h5>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

// function Person(props) {
//   const personStyle = {
//     border: "2px solid yellow",
//     margin: "10px",
//     padding: "10px",
//     width: "75%",
//     backgroundColor: "blue",
//   };
//   return (
//     <div style={personStyle}>
//       <h1> Name: {props.name} </h1>
//       <h2>Position: {props.position} </h2>
//     </div>
//   );
// }

// function Family(props) {
//   const familyStyle = {
//     backgroundColor: "orange",
//     border: "2px solid blue",
//     width: "75%",
//     padding: "20px",
//     margin: "10px",
//   };
//   return (
//     <div style={familyStyle}>
//       <h1>Family of: {props.name} </h1>
//       <h2>Name: {props.name} </h2>
//       <h2>Father: {props.father} </h2>
//       <h2>Mother: {props.mother} </h2>
//       <h2>Life Partner: {props.partner} </h2>
//     </div>
//   );
// }

export default App;
