import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="" element={<RequiredAuth><Home/></RequiredAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<RequiredAuth><Products/></RequiredAuth>}>
       
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
