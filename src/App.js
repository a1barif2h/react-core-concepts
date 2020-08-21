import React from "react";
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
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Masrafi Bin Mortoza" position="Captain"></Person>
        <Person name="Sakib Al Hasan" position="All-Rounder"></Person>
        <Person name="Mostafizur Rahman" position="Fast Boller"></Person>
        <Family
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
        ></Family>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "10px",
    width: "75%",
    backgroundColor: "blue",
  };
  return (
    <div style={personStyle}>
      <h1> Name: {props.name} </h1>
      <h2>Position: {props.position} </h2>
    </div>
  );
}

function Family(props) {
  const familyStyle = {
    backgroundColor: "orange",
    border: "2px solid blue",
    width: "100%",
    padding: "20px",
    margin: "10px",
  };
  return (
    <div style={familyStyle}>
      <h1>Family of: {props.name} </h1>
      <h2>Name: {props.name} </h2>
      <h2>Father: {props.father} </h2>
      <h2>Mother: {props.mother} </h2>
      <h2>Life Partner: {props.partner} </h2>
    </div>
  );
}

export default App;
