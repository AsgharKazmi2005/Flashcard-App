function Card({ id, question, answer }) {
  return (
    <div className="color" id={id}>
      <h3 className="front">{question}</h3>
      <h4 className="back">{answer}</h4>
    </div>
  );
}
export default Card;
