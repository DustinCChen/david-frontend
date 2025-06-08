import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
