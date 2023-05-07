"use client";
import { Coin, Info, Plus, PlusCircle, Warning, X } from "phosphor-react";
import { useState, useEffect } from "react";

function CoinFlip() {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [flipResult, setFlipResult] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const flipCoin = () => {
    if (options.every((option) => option.trim() !== "")) {
      setIsFlipping(true);
      setTimeout(() => {
        const result = options[Math.floor(Math.random() * options.length)];
        setFlipResult(result);
        setIsFlipping(false);
      }, 1000);
    }
  };

  useEffect(() => {
    setFlipResult("");
  }, [options]);

  return (
    <div className="coin-container">
      <h1>Enter options:</h1>
      {options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="text"
            placeholder="Enter an option..."
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          {options.length > 2 && (
            <button onClick={() => removeOption(index)}>
              <X size={20} weight="light" className="x" />
            </button>
          )}
        </div>
      ))}

      <div className="btn-container">
        <div className="btn-wrapper">
          <button onClick={addOption} className="btn secondary ">
            <Plus size={18} weight="light" />
            Add Option
          </button>
          <button
            onClick={flipCoin}
            disabled={
              isFlipping || options.some((option) => option.trim() === "")
            }
            className="btn primary"
          >
            <Coin size={20} weight="light" />
            {isFlipping ? "Flipping..." : "Flip coin"}
          </button>
        </div>
        <div className={`result ${isFlipping ? "flip" : ""}`}>
          {flipResult && (
            <div className="answer">
              <h2>{flipResult}</h2>
            </div>
          )}
        </div>
        {options.some((option) => option.trim() === "") && (
          <div className="error">
            <Info size={20} weight="light" />
            <p>All options must be filled in to flip the coin</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoinFlip;
