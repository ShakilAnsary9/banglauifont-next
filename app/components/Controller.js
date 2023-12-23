"use client";

import { useState } from "react";

const Controller = ({
  setPreviewText,
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
}) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    setPreviewText(newText || "আমার সোনার বাংলা");
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setFontSize(newSize);
  };

  const handleFontWeightChange = (e) => {
    const newSize = parseInt(e.target.value);
    setFontWeight(newSize);
  };

  return (
    <div className="container mx-auto p-10 mb-6 bg-[url('/svg/font-bg.svg')] bg-image rounded-2xl">
      <div className="grid grid-cols-4 gap-6">
        <input
          className="col-span-2 px-4 rounded-xl h-12 text-black"
          type="text"
          placeholder="এখানে লিখুন"
          value={inputText}
          onChange={handleInputChange}
        />
        <div>
          <span>Font Weight</span>
          <input
            className="w-full"
            type="range"
            name=""
            id="fontweight"
            min="100"
            max="900"
            step={100}
            value={fontWeight}
            onChange={handleFontWeightChange}
          />
        </div>
        <div>
          <span>Font Size</span>
          <input
            className="w-full"
            type="range"
            name=""
            min="10"
            max="60"
            id="fontsize"
            step={1}
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Controller;
