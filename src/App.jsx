import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="p-14">
        <h1 className="text-6xl text-white text-center font-semibold p-8 flex flex-wrap justify-center items-center drop-shadow-xl">
          Background Color Changer
        </h1>
        <h5 className="text-4xl text-white text-center font-semibold flex  flex-wrap justify-center items-center  drop-shadow-xl -mr-14">
          ~Inspired by Evangeline
        </h5>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 drop-shadow-2xl rounded-full">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setColor("Fuchsia")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "fuchsia" }}>
            Pink
          </button>
          <button
            onClick={() => setColor("orangered")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orangered" }}>
            Orange
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}>
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
