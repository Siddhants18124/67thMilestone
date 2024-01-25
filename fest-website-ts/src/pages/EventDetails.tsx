import { Navigate, useParams } from "react-router-dom";

function EventDetails() {
  const { eventId } = useParams();

  console.log(eventId);

  if (!eventId) return <Navigate to={"/not-found"} />;

  return <div>My Event Details</div>;
}

export default EventDetails;
