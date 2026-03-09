import { Link } from "react-router-dom"

function EventCard({event}){

return(

<div className="event-card">

<img src={event.image} alt={event.title}/>

<div className="event-info">

<h3>{event.title}</h3>

<p>{event.location}</p>

<p>{event.date}</p>

<Link to={`/event/${event.id}`}>
<button>Book Ticket</button>
</Link>

</div>

</div>

)

}

export default EventCard