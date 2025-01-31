import "./Input.scss";
import React from "react";

interface InputProps {
  text: string;
  result: string;
}

const Input = ({ text, result }: InputProps) => {
  return (
    <div className="input">
      <div className="input__result">{result}</div>
      <div className="input__text">{text}</div>
    </div>
  );
};

export default Input;
