import React from "react";
import {DatePicker} from "@nextui-org/react";

export default function App() {
  return (
    <DatePicker label="Birth date" className="max-w-[284px]" />
  );
}

// npx nextui-cli@latest add date-picker