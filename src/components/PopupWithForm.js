function PopupWithForm(props) {
  return (
    <div
      id={`popup-user-${props.name}`}
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_opened`
          : `popup popup_type_${props.name}`
      }
    >
      <div className="popup__container container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate="">
          <fieldset className="popup__fieldset">
            {props.children}
            <button
              id="edit-profile-button"
              className="popup__button"
              type="submit"
            >
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
