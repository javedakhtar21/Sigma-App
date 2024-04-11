import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserRegister from "./Components/UserRegister";
import Login from "./Components/userLogin";
import NavBar from "./Components/NavBar";
import NavBar2 from "./Components/NavBar2";
import Subscribe from "./Components/subscribe";
import AllProducts from "./Components/AllProducts";
import Menu from "./Components/SideBar/Menu";
import Contact from "./Components/Contact";
import Orders from "./Components/SideBar/Orders";
import Product1 from "./Components/Products-Details/Product1";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/menu/*" element={<Menu/>}/> 
        <Route path="/allproducts/p1" element={<Product1 />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      {/* <Subscribe/> */}
    </BrowserRouter>
    
  );
}

export default App;