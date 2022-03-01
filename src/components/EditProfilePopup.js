import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onUpdateUser, isLoading, isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [state, setState] = React.useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    setState({ name: currentUser.name, description: currentUser.about });
  }, [currentUser]);

  function handleClosePopup() {
    onClose();
    setState({ name: currentUser.name, description: currentUser.about });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: state.name,
      about: state.description,
    });
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      title="Редактировать профиль"
      name="formprofile"
      isOpen={isOpen}
      onClose={handleClosePopup}
      onSubmit={handleSubmit}
      buttonTextLoadingTrue="Сохранение..."
      buttonTextLoadingFalse="Сохранить"
    >
      <input
        onChange={handleChange}
        className="popup__input"
        id="name-input"
        type="text"
        name="name"
        value={state.name}
        required=""
        placeholder="Имя"
        minLength={2}
        maxLength={40}
      />
      <span className="popup__error name-input-error" />
      <input
        onChange={handleChange}
        className="popup__input"
        id="job-input"
        type="text"
        name="description"
        value={state.description}
        required=""
        placeholder="О себе"
        minLength={2}
        maxLength={200}
      />
      <span className="popup__error job-input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
