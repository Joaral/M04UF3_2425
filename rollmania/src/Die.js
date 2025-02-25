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

export default Die;
