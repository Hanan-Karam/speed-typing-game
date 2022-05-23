import React from 'react';
import './App.css';
import useGame from './hooks/useGame';

function App() {
  const {handleChange, 
          words, 
          isCounterOn, 
          counter, 
          textAriaref, 
          resetGame, 
          wordCount
        } = useGame()
  
  return (
    <div className="container">
      <h1 className="title">Speed typing Game</h1>

      <textarea
                placeholder="Start typing...."
                onChange={handleChange}
                name="words"
                value={words}
                disabled = {!isCounterOn || counter == 0}
                ref ={textAriaref}
      />

      <h4 className="time-remaining">Time Remaining: {counter} </h4>
      <button 
      onClick={resetGame}
      disabled ={isCounterOn}
      >
        Start
      </button>
      <h1 className="word-count">Word Count:{wordCount} </h1>
    </div>
      
  );
}

export default App;
