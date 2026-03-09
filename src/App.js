import { BrowserRouter,Routes,Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BookingForm from "./pages/BookingForm"
import MyBookings from "./pages/MyBookings"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/event/:id" element={<BookingForm/>}/>

<Route path="/bookings" element={<MyBookings/>}/>

</Routes>

</BrowserRouter>

)

}

export default App