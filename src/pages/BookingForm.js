import { useState } from "react"
import { useParams } from "react-router-dom"

function BookingForm(){

const {id}=useParams()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [success,setSuccess]=useState(false)

const handleSubmit=(e)=>{

e.preventDefault()

const booking={
eventId:id,
name,
email,
phone
}

const oldBookings=
JSON.parse(localStorage.getItem("bookings"))||[]

oldBookings.push(booking)

localStorage.setItem(
"bookings",
JSON.stringify(oldBookings)
)

setSuccess(true)

}

const resetForm=()=>{
setSuccess(false)
setName("")
setEmail("")
setPhone("")
}

return(

<div className="booking-wrapper">

<div className="booking-card">

<h2>Book Your Ticket</h2>

{!success ? (

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="tel"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<button className="book-btn">
Confirm Booking
</button>

</form>

):(

<div className="success-box">

<h3>🎉 Booking Successful!</h3>

<p>Your ticket has been reserved.</p>

<button onClick={resetForm}>
Book Another Ticket
</button>

</div>

)}

</div>

</div>

)

}

export default BookingForm