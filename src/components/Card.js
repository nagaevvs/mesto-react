function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="element__delete" hidden="" type="button" />
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.link}
          alt={props.name}
          onClick={handleClick}
        />
      </div>
      <div className="element__description">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" />
          <p className="element__counter">{props.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
