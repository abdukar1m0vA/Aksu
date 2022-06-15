import React from "react";
import "./buttons.scss";

function Button({ button, filter }) {
  return (
    <div className="buttons">
      <h1>Menu</h1>
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
