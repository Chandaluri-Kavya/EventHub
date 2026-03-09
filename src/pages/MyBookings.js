import { useEffect,useState } from "react"

function MyBookings(){

const [bookings,setBookings]=useState([])

useEffect(() => {

  const savedBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  setBookings(savedBookings);

}, [])

return(

<div className="section">

<h2>My Bookings</h2>

{bookings.length===0 ?(
<p>No bookings yet</p>
):(

<ul>

{bookings.map((b,i)=>(
<li key={i}>
{b.name} - {b.phone}
</li>
))}

</ul>

)}

</div>

)

}

export default MyBookings