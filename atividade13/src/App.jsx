import { useState } from "react";
import Slide from "./Slide";

function App() {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  return <Slide slides={slides} />;
}

export default App;
