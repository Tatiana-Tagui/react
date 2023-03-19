import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//COMPONENTES
import Navbar from "../components/Navbar/NavBar.jsx";
import ItemListContainer from "../ItemListContainer/ItemListContainer.css";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import { DarkModeProvider } from "../context/DarkModeContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer />
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
