import "./App.css";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import Layout3 from "./components/Layout3";
import Layout4 from "./components/Layout4";
import { useGetProductsQuery } from "./store/apis/productQueries";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Layout1 />
      <Layout2 />
      <Layout3 />
      <Layout4 />
    </div>
  );
}

export default App;
