import React from "react";
import {Slider} from "@nextui-org/react";

export default function App() {
  return (
    <Slider 
      label="Temperature" 
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      defaultValue={0.4}
      className="max-w-md"
    />
  );
}


// npx nextui-cli@latest add slider