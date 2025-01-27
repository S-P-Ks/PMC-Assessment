import { useState } from "react";
import "./App.css";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import Layout3 from "./components/Layout3";
import Layout4 from "./components/Layout4";

function App() {
  const [layoutSelected, setLayoutSelected] = useState(1);

  const renderLayout = () => {
    switch (layoutSelected) {
      case 1:
        return <Layout1 />;
      case 2:
        return <Layout2 />;
      case 3:
        return <Layout3 />;
      case 4:
        return <Layout4 />;
      default:
        return <div>No layout selected</div>;
    }
  };
  return (
    <div>
      <div className="space-x-2 p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setLayoutSelected(1)}
        >
          Layout 1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setLayoutSelected(2)}
        >
          Layout 2
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setLayoutSelected(3)}
        >
          Layout 3
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setLayoutSelected(4)}
        >
          Layout 4
        </button>
      </div>
      {renderLayout()}
    </div>
  );
}

export default App;
