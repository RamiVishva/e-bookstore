import logo from './logo.svg';
import './App.css';
import User from './component/User';
import Home from './component/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <h1>Header</h1>
      <Routes>
      <Route path="/"></Route>
      <Route path="/user" element={<User name="Kishan" id="4"></User>}></Route>
      <Route path="/home" element={<Home></Home>}/>
      </Routes>
      <h1>Footer</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
