import React, { useState, useEffect } from "react";
import '../css/global.css'

const Btn = ({ name, index, onclick, getCurIndex }) => {
  const [colour, setColour] = useState("grey");

  useEffect(() => {
    if (index != getCurIndex()) setColour("white");
  });

  const click = () => {
    setColour("grey");
    onclick();
  };

  return (
    <button 
      style={{
        backgroundColor: colour,
      }}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default Btn;
