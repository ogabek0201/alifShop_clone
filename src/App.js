import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import Televizory from "./components/Televizory/Televizory";
import Telefony from "./components/Telefony/Telefony";
import Stiralka from "./components/Stiralka/Stiralka";
import Kondisioner from "./components/Kondisioner/Kondisioner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="televizory" element={<Televizory />} />
        <Route path="telefony" element={<Telefony />} />
        <Route path="stiralny" element={<Stiralka />} />
        <Route path="kondisioner" element={<Kondisioner />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
