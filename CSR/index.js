import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, MedellinJS!</h1>
      <p>Welcome to my website.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
