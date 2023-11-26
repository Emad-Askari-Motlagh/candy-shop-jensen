import React from "react";
import "./Button.scss";

export default function Button_Secoundary({ children, width, onClick }) {
  return (
    <>
      <button style={{ width }} className="button-wrapper" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
