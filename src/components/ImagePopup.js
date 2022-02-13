function ImagePopup(props) {
  return (
    <div
      id="popup-view-image"
      className={props.isCliked ? "popup popup_opened" : "popup"}
    >
      <div className="popup__view-image-container container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__figcaption">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
