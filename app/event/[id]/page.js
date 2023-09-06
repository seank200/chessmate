import Container from "@/components/Container";
import EventMemberList from "@/components/member/EventMemberList";
import MemberList from "@/components/member/MemberList";
import { getApiUrl } from "@/utils";
import {
  faCalendar,
  faChessKing,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function page({ params }) {
  const { id: eventId } = params;
  const event = await getEvent(eventId);

  const dtformat = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const eventTime = new Date(event.time);

  return (
    <Container>
      <Link href="/" className="button__back">
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ height: "1em", marginRight: "0.25em" }}
        />
        모임 목록
      </Link>
      <h1>{event.name}</h1>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ height: "1rem", marginRight: "0.5rem" }}
        />
        모임 일시
      </h2>
      <p>{dtformat.format(eventTime)}</p>

      <h2 style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faUser}
          style={{ height: "1rem", marginRight: "0.5rem" }}
        />
        참여 멤버&nbsp;
        <span style={{ fontWeight: "400" }}>({event.members.length}명)</span>
      </h2>
      <EventMemberList event={event} members={event.members} />

      <h2>
        <FontAwesomeIcon
          icon={faChessKing}
          style={{ height: "1rem", marginRight: "0.5rem" }}
        />
        경기 정보
      </h2>
      <p>경기 기록, 현황</p>
    </Container>
  );
}

async function getEvent(eventId) {
  try {
    const response = await fetch(getApiUrl(`/api/events/${eventId}`), {
      method: "GET",
      cache: "no-cache",
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
}
