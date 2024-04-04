import { BrowserRouter, Routes,Route } from 'react-router-dom'
import "./App.css";
import UserRegister from "./Components/UserRegister";
<<<<<<< HEAD
import NavBar from "./Components/NavBar"
function App() {
  return (
    <>
      <NavBar />
      {/* <UserRegister /> */}
    </>
=======
import Login from "./Components/userLogin"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<UserRegister/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
>>>>>>> 43e687fd859ce53982515fd4abf856b047e39b0d
  );
}

export default App;