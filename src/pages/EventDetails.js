import { useParams, Link } from "react-router-dom";
import events from "../data/events";

function EventDetails() {

  const { id } = useParams();

  const event = events.find(
    (e) => e.id === parseInt(id)
  );

  return (
    <div>

      <h2>{event.title}</h2>
      <p>Location: {event.location}</p>

      <Link to={`/book/${event.id}`}>
        Book Ticket
      </Link>

    </div>
  );
}

export default EventDetails;