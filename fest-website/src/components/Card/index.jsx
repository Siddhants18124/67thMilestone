import "./index.css";

const Card = ({ image, text }) => {
  return (
    <>
      <div className="card">
        <div className="card-overlay"></div>
        <img src={image} alt={text} />
        <p>{text}</p>
      </div>
    </>
  );
};

const CardSection = () => {
  return (
    <div className="card-section">
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
      <Card image="https://picsum.photos/200/200" text="Cultural" />
    </div>
  );
};

export default CardSection;
