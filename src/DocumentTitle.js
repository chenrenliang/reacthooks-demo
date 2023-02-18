import { useState, useEffect } from "react";
import "./styles.css";

function SayHello() {
  const greetings = ["Hello", "Ciao", "Hola", "こんにちは"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = greetings[index];

    console.log(index, greetings[index]);
  });

  function updateGreeting() {
    setIndex(Math.floor(Math.random() * greetings.length));
  }

  return <button onClick={updateGreeting}>say hi</button>;
}

export default function App() {
  return (
    <div className="App">
      <SayHello />
    </div>
  );
}
