import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col dark:bg-slate-800 text-white p-6 items-center shadow-lg shadow-cyan-500/100 rounded-md main-form">
      <Home />
    </div>
  );
}

export default App;
