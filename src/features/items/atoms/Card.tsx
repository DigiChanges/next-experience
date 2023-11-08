import './Card.css';

interface CardItemProps
{
    name: string;
    type: number;
}

const Card = (props: CardItemProps) =>
{
  const { name, type } = props;

  return (
    <div className="card_container">
    <h1>{name}</h1>
    <div className="div-card" />
    <div className="extra-detail-card">
      <span>Type: {type}</span>
    </div>
  </div>
  );
};

export default Card;
