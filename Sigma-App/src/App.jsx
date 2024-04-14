import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserRegister from "./Components/UserRegister";
import Login from "./Components/userLogin";
import NavBar from "./Components/NavBar";
import NavBar2 from "./Components/NavBar2";
import Subscribe from "./Components/Subscribe";
import AllProducts from "./Components/AllProducts";
import Menu from "./Components/SideBar/Menu";
import Contact from "./Components/Contact";
import Orders from "./Components/SideBar/Orders";
import Product1 from "./Components/Products-Details/Product1.jsx";
import Product2 from "./Components/Products-Details/Product2.jsx";
import Product3 from "./Components/Products-Details/Product3.jsx";
import Product4 from "./Components/Products-Details/Product4.jsx";
import Product5 from "./Components/Products-Details/Product5.jsx";
import Product6 from "./Components/Products-Details/Product6.jsx";
import Product7 from "./Components/Products-Details/Product7.jsx";
import Product8 from "./Components/Products-Details/Product8.jsx";
import Product9 from "./Components/Products-Details/Product9.jsx";
import Product10 from "./Components/Products-Details/Product10.jsx";
import Product11 from "./Components/Products-Details/Product11.jsx";
import Product12 from "./Components/Products-Details/Product12.jsx";
import Product13 from "./Components/Products-Details/Product13.jsx";
import Product14 from "./Components/Products-Details/Product14.jsx";
import Product15 from "./Components/Products-Details/Product15.jsx";
import Product16 from "./Components/Products-Details/Product16.jsx";
import Product17 from "./Components/Products-Details/Product17.jsx";
import Product18 from "./Components/Products-Details/Product18.jsx";
import Product19 from "./Components/Products-Details/Product19.jsx";
import Product20 from "./Components/Products-Details/Product20.jsx";
import Product21 from "./Components/Products-Details/Product21.jsx";
import Product22 from "./Components/Products-Details/Product22.jsx";
import Product23 from "./Components/Products-Details/Product23.jsx";
import Product24 from "./Components/Products-Details/Product24.jsx";
import Product25 from "./Components/Products-Details/Product25.jsx";
import Product26 from "./Components/Products-Details/Product26.jsx";
import Product27 from "./Components/Products-Details/Product27.jsx";
import Product28 from "./Components/Products-Details/Product28.jsx";
import Product29 from "./Components/Products-Details/Product29.jsx";
import Product30 from "./Components/Products-Details/Product30.jsx";
import Home from "./Components/Home";

function App() {
  let productsElement = Array.from({ length: 30 });
  productsElement = [
    <Product1 />,
    <Product2 />,
    <Product3 />,
    <Product4 />,
    <Product5 />,
    <Product6 />,
    <Product7 />,
    <Product8 />,
    <Product9 />,
    <Product10 />,
    <Product11 />,
    <Product12 />,
    <Product13 />,
    <Product14 />,
    <Product15 />,
    <Product16 />,
    <Product17 />,
    <Product18 />,
    <Product19 />,
    <Product20 />,
    <Product21 />,
    <Product22 />,
    <Product23 />,
    <Product24 />,
    <Product25 />,
    <Product26 />,
    <Product27 />,
    <Product28 />,
    <Product29 />,
    <Product30 />,
  ];
  const productsPath = Array.from({ length: 30 });
  return (
    <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/menu/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />

        {productsPath.map((_,index) => (
          <Route
            key={index}
            path={`/search/p${index + 1}`}
            element={productsElement[index]}
          />
        ))}
        <Route path="/search" element={<AllProducts />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Subscribe />
    </BrowserRouter>
  );
}

export default App;
