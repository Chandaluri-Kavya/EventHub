import { useState } from "react";

function BookingForm(){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [success,setSuccess]=useState(false)

const handleSubmit=(e)=>{
e.preventDefault()

setSuccess(true)
}

const resetForm=()=>{
setName("")
setEmail("")
setPhone("")
setSuccess(false)
}

return(

<div className="booking-page">

<div className="booking-box">

<h2>Book Your Ticket</h2>

{!success ? (

<form onSubmit={handleSubmit}>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<button type="submit">
Confirm Booking
</button>

</form>

):(

<div className="success-message">

<h3>Booking Successful 🎉</h3>

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