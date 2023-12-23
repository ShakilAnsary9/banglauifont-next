"use client";

import { useState } from "react";
import FontCard from "./components/FontCard";
import Controller from "./components/Controller";
import Header from "./components/Header";

export default function Home() {
  const [previewText, setPreviewText] = useState("আমার সোনার বাংলা");
  const [fontSize, setFontSize] = useState(24);
  const [fontWeight, setFontWeight] = useState(400);

  return (
    <>
      <Header />
      <Controller
        setPreviewText={setPreviewText}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontWeight={fontWeight}
        setFontWeight={setFontWeight}
      />
      <FontCard
        previewText={previewText}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </>
  );
}
