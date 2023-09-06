import Container from "@/components/Container";
import EventList from "@/components/event/EventList";
import { getApiUrl } from "@/utils";

export default async function Home() {
  const events = await fetchEvents();
  return (
    <Container>
      <h1>모임 목록</h1>
      <EventList events={events} />
    </Container>
  );
}

async function fetchEvents() {
  try {
    const response = await fetch(getApiUrl("/api/events"), {
      method: "GET",
      cache: "no-cache",
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
