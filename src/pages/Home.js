import { useState } from "react"
import events from "../data/events"
import Hero from "../components/Hero"
import EventCard from "../components/EventCard"

function Home(){

const [search,setSearch]=useState("")

const filteredEvents=events.filter(event=>
event.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div>

<Hero/>

<div className="section" id="events">

<h2>Featured Concerts</h2>

<input
type="text"
placeholder="Search concerts..."
className="search"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="event-grid">

{filteredEvents.map(event=>(
<EventCard key={event.id} event={event}/>
))}

</div>

</div>

</div>

)

}

export default Home