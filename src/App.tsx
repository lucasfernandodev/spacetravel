import Home from "./pages/Home";
import Destination from "./pages/Destination";
import './style/reset.css';
import './style/style.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/destination" element={<Destination />}/>
      <Route path="/Crew" element={<Crew />}/>
      <Route path="/Technology" element={<Technology />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
