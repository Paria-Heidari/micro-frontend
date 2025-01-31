import React from "react";
import "./Button.scss";

interface ButtonProps {
  symbol: string;
  color?: string;
  handleClick: (symbol: string) => void;
}
const Button = ({ symbol, color, handleClick }: ButtonProps) => {
  return (
    <div
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </div>
  );
};

export default Button;
