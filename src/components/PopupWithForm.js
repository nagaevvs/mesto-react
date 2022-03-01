function PopupWithForm({
  isLoading,
  buttonTextLoadingTrue,
  buttonTextLoadingFalse,
  name,
  isOpen,
  onClose,
  title,
  onSubmit,
  children,
}) {
  const buttonText = isLoading ? buttonTextLoadingTrue : buttonTextLoadingFalse;

  return (
    <div
      id={`popup-user-${name}`}
      className={
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }
    >
      <div className="popup__container container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          onSubmit={onSubmit}
          className="popup__form"
          name={name}
          noValidate=""
        >
          <fieldset className="popup__fieldset">
            {children}
            <button
              id="edit-profile-button"
              className="popup__button"
              type="submit"
            >
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
