export default function EventDetails({ params }: { params: { id: string } }) {
  return <h1>Information about {params.id}</h1>;
}
