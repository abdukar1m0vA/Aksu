import React, { useState } from "react";
import Button from "./Buttons"
import items from "./allData"
import Menu from "./Menu"

const allCategories = ["Barchasi", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function Menular() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "Barchasi") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="menular">
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default Menular;
