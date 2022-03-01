function ImagePopup({ isCliked, onClose, card }) {
  return (
    <div
      id="popup-view-image"
      className={isCliked ? "popup popup_opened" : "popup"}
    >
      <div className="popup__view-image-container container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__figcaption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
