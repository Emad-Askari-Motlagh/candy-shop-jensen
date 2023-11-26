import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app app--${theme}-theme`}>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/products/:product" element={<Product />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
