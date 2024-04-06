import { BrowserRouter, Routes,Route } from 'react-router-dom'
import "./App.css";
import UserRegister from "./Components/UserRegister";
import Login from "./Components/userLogin"
import Subscribe from "./Components/subscribe";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<UserRegister/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Subscribe/>
    </BrowserRouter>
    
  );
}

export default App;