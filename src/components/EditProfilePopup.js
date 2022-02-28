import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isLoading={props.isLoading}
      title="Редактировать профиль"
      name="formprofile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonTextLoadingTrue="Сохранение..."
      buttonTextLoadingFalse="Сохранить"
    >
      <input
        onChange={handleChangeName}
        className="popup__input"
        id="name-input"
        type="text"
        name="name"
        value={name}
        required=""
        placeholder="Имя"
        minLength={2}
        maxLength={40}
      />
      <span className="popup__error name-input-error" />
      <input
        onChange={handleChangeDescription}
        className="popup__input"
        id="job-input"
        type="text"
        name="job"
        value={description}
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
