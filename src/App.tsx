import { useEffect, useState } from 'react';
import './App.css';

const getRandomNumber = () => Math.floor(Math.random() * 3) + 1;

function App() {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([0, 0, 0]);
  const [title, setTitle] = useState<string>("Let's Gamble!");

  const spinWheel = () => {
    title.length > 0 && setTitle('');
    setRandomNumbers([getRandomNumber(), getRandomNumber(), getRandomNumber()]);
  };

  useEffect(() => {
    if (
      randomNumbers[0] === randomNumbers[1] &&
      randomNumbers[0] === randomNumbers[2]
    ) {
      randomNumbers[0] !== 0 && setTitle('Jackpot!!!');
    }
    console.log('useEffect test:', randomNumbers);
  }, [randomNumbers]);
  return (
    <>
      <div>
        <div className="title">{title}</div>
        <div className="container">
          <div className="number-lbl">{randomNumbers[0]}</div>
          <div className="number-lbl">{randomNumbers[1]}</div>
          <div className="number-lbl">{randomNumbers[2]}</div>
        </div>
        <button onClick={() => spinWheel()} className="btn-spin">
          Spin
        </button>
      </div>
    </>
  );
}

export default App;
