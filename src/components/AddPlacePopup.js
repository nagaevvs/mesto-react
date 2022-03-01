import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onAddPlace, isLoading, isOpen, onClose }) {
  const [state, setState] = React.useState({ title: "", image: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: state.title,
      link: state.image,
    });
    setState({ title: "", image: "" });
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      title="Новое место"
      name="formcard"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonTextLoadingTrue="Сохранение..."
      buttonTextLoadingFalse="Создать"
    >
      <input
        onChange={handleChange}
        className="popup__input"
        id="title-input"
        type="text"
        name="title"
        value={state.title}
        placeholder="Название"
        required=""
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error title-input-error" />
      <input
        onChange={handleChange}
        className="popup__input"
        id="url-input"
        type="url"
        name="image"
        value={state.image}
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__error url-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
