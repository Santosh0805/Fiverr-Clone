
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

export default function Fiverr(){

return(<div>
   {/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<h1>Testing</h1>}/>
    </Routes>
    </div>
)
}