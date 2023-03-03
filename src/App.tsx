import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col dark:bg-slate-800 text-white p-6 items-center">
      <h1 className="w-96 bg-yellow-500 text-blue-600 text-white text-center p-6 rounded-full m-3 border-2">
        Hello
      </h1>
      <Home />
    </div>
  );
}

export default App;
