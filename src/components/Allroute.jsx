import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
export const Allroute =()=>{
return<div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Why-Harvest" element={<h1>Why Harvest</h1>}/>
<Route path="/Features" element={<h1>Features</h1>}/>
<Route path="/Customers" element={<h1>Customers</h1>}/>
<Route path="/Integrations" element={<h1>Integrations</h1>}/>
<Route path="/Pricing" element={<h1>Pricing</h1>}/>
<Route path="/signin" element={<h1>Sign In</h1>}/>
<Route path="/signup" element={<h1>Sign Up</h1>}/>

</Routes>
    </div>
}