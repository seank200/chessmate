import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function EventItem({ event }) {
  const dtformat = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const eventTime = new Date(event.time);

  return (
    <Link href={`/event/${event.id}`} className="event__item">
      <h2>{event.name}</h2>
      <div className="event__item-details">
        <div className="event__item-participants">
          <FontAwesomeIcon
            icon={faUser}
            style={{ height: "0.9em", marginRight: "0.375em" }}
          />
          {event.members.length || "0"}
          <div>
            {event.members.slice(0, 5).map((member) => {
              return <p key={member.id}>{member.name}</p>;
            })}
            {event.members.length > 5 && <p>...</p>}
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCalendar}
            style={{ height: "0.9em", marginRight: "0.375em" }}
          />
          {dtformat.format(eventTime)}
        </div>
      </div>
    </Link>
  );
}
