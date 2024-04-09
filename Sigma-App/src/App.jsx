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
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      {/* <Subscribe/> */}
    </BrowserRouter>
    
  );
}

export default App;