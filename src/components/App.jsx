import React from "react";

var isDone = false;

// This is Imperative State Method
function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>

      {/* In Declarative it is simple first we have to decalre variable then we can check condition using ternary operator . */}
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
