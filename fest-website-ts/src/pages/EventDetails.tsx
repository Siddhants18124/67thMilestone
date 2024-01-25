import { Navigate, useParams } from "react-router-dom";
import { Events } from "../constants/data";
import { EventType } from "../types";

function EventDetails() {
  const { eventType, eventId } = useParams<{
    eventType: EventType;
    eventId: string;
  }>();

  if (!eventId || !eventType) return <Navigate to={"/not-found"} />;

  console.log(Events[eventType][eventId]);

  return <div>My Event Details</div>;
}

export default EventDetails;
