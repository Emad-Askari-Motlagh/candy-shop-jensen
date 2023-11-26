import React from "react";
import "./Button.scss";

export default function Button({ label, width, onClick }) {
  return (
    <button style={{ width }} className="button-wrapper" onClick={onClick}>
      {label}
    </button>
  );
}
