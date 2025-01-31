import React, { useState } from "react";
import * as math from "mathjs";
import Button from "./Button";
import Input from "./Input";
import "./Calculator.scss";
const Calculator = () => {
  const btnColor = "#FFA33C";
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addToText = (val: string) => {
    setText((prevText) => prevText + val);
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const showResult = () => {
    const input = math.evaluate(text);
    setResult(input);
  };

  return (
    <div className="calc-wrapper">
      <Input result={result} text={text} />
      <div className="row">
        <Button symbol="7" handleClick={addToText} />
        <Button symbol="8" handleClick={addToText} />
        <Button symbol="9" handleClick={addToText} />
        <Button symbol="*" color={btnColor} handleClick={addToText} />
      </div>
      <div className="row">
        <Button symbol="4" handleClick={addToText} />
        <Button symbol="5" handleClick={addToText} />
        <Button symbol="6" handleClick={addToText} />
        <Button symbol="/" color={btnColor} handleClick={addToText} />
      </div>
      <div className="row">
        <Button symbol="1" handleClick={addToText} />
        <Button symbol="2" handleClick={addToText} />
        <Button symbol="3" handleClick={addToText} />
        <Button symbol="+" color={btnColor} handleClick={addToText} />
      </div>
      <div className="row">
        <Button symbol="0" handleClick={addToText} />
        <Button symbol="." handleClick={addToText} />
        <Button symbol="=" handleClick={showResult} />
        <Button symbol="-" color={btnColor} handleClick={addToText} />
      </div>
      <Button symbol="Clear" color="#6B6B6B" handleClick={resetInput} />
    </div>
  );
};

export default Calculator;
