import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      isLoading={props.isLoading}
      title="Новое место"
      name="formcard"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonTextLoadingTrue="Сохранение..."
      buttonTextLoadingFalse="Создать"
    >
      <input
        onChange={handleAddName}
        className="popup__input"
        id="title-input"
        type="text"
        name="title"
        placeholder="Название"
        required=""
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error title-input-error" />
      <input
        onChange={handleAddLink}
        className="popup__input"
        id="url-input"
        type="url"
        name="image"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__error url-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
