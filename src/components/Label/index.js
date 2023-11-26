import React from "react";
import "./Label.styles.scss";

export default function Label({ children, color }) {
  return (
    <div>
      <label style={{ color }} className="label">
        {children}
      </label>
    </div>
  );
}
