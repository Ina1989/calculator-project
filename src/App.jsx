import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
    const clickedValue = e.target.name;
    // Kontrolloni nëse rezultati aktual është zero dhe numri i klikuar nuk është zero
    if (result === "0" && clickedValue !== "0") {
      setResult(clickedValue);
    } else {
      setResult(result.concat(clickedValue));
    }
  };
  const clear = () => {
    setResult("0");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand" value={result}>
          {result}
        </div>
        <div className="current-operand" value={result}>
          {result}
        </div>
      </div>
      <button onClick={backspace} className="span-two">
        AC
      </button>
      <button onClick={clear}>DEL</button>
      <button name="/" onClick={handleclick}>
        /
      </button>
      <button name="1" onClick={handleclick}>
        1
      </button>
      <button name="2" onClick={handleclick}>
        2
      </button>
      <button name="3" onClick={handleclick}>
        3
      </button>
      <button name="*" onClick={handleclick}>
        *
      </button>
      <button name="4" onClick={handleclick}>
        4
      </button>
      <button name="5" onClick={handleclick}>
        5
      </button>
      <button name="6" onClick={handleclick}>
        6
      </button>
      <button name="+" onClick={handleclick}>
        +
      </button>
      <button name="7" onClick={handleclick}>
        7
      </button>
      <button name="8" onClick={handleclick}>
        8
      </button>
      <button name="9" onClick={handleclick}>
        9
      </button>
      <button name="-" onClick={handleclick}>
        -
      </button>
      <button name="." onClick={handleclick}>
        .
      </button>
      <button name="0" onClick={handleclick}>
        0
      </button>
      <button className="span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App;
