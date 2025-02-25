import { useState, useEffect } from 'react';
import './Die.css';

function Die() {
  let [number, setNumber] = useState(1);
  
  function roll() {
    let r = Math.floor(Math.random() * 6) + 1;
    setNumber(r);
  }

  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <button className="Die" onClick={roll}>
        <p className="DieNumber">{number}</p>
      </button>
      <p>{count}</p>
    </section>
  );
}

function RollButton() {
  const [count, setCount] = useState(5);
  const [text, setText] = useState("5");

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount - 1;
          setText(newCount > 0 ? newCount.toString() : "Roll!!!");
          return newCount;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, []);

  return <button>{text}</button>;
}


export default Die;
