import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="navbar">

<h2>EventHub</h2>

<div>

<Link to="/">Home</Link>
<Link to="/bookings">My Bookings</Link>

</div>

</nav>

)

}

export default Navbar