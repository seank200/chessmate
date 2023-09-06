import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <div className="event__list">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
