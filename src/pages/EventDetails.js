import { useParams, Link } from "react-router-dom";
import events from "../data/events";

function EventDetails() {

  const { id } = useParams();

  const event = events.find(
    (e) => e.id === parseInt(id)
  );

  return (

    <div className="event-details">

      <img
        src={event.image}
        alt={event.title}
        className="event-banner"
      />

      <div className="event-info-box">

        <h1>{event.title}</h1>

        <p><strong>Location:</strong> {event.location}</p>

        <p><strong>Date:</strong> {event.date}</p>

        <p>
          Experience an unforgettable night of live music
          and entertainment. Book your tickets now
          before they sell out.
        </p>

        <Link to={`/event/${event.id}/book`}>

          <button className="book-now-btn">
            Book Ticket
          </button>

        </Link>

      </div>

    </div>

  );
}

export default EventDetails;