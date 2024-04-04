import { BrowserRouter, Routes,Route } from 'react-router-dom'
import "./App.css";
import UserRegister from "./Components/UserRegister";
import Login from "./Components/userLogin"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<UserRegister/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;