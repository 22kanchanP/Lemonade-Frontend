import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./components/Registration"
import HeroSection from "./components/Home/HeroSection"
import Confirmation from "./components/Confirmation"
import Listing from "./components/Listing"




function Routing()
{
    return(
        <div>
              
            <BrowserRouter>
           
                    <Routes>
                    <Route path = "/" element = {<HeroSection/>}/>
                    <Route path = "/registration" element = {<Registration/>}/>
                    <Route path = "/confirmation" element = {<Confirmation/>}/>
                    <Route path = "/listing" element = {<Listing/>}/>
                    </Routes>
            </BrowserRouter>
 
            
        </div>
    )
}

export default Routing