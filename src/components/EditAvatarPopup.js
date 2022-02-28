import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isLoading={props.isLoading}
      title="Обновить Аватар"
      name="formavatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonTextLoadingTrue="Сохранение..."
      buttonTextLoadingFalse="Сохранить"
    >
      <input
        ref={inputRef}
        className="popup__input"
        id="avatar-url-input"
        type="url"
        name="avatar"
        placeholder="Ссылка на изображение"
        required=""
      />
      <span className="popup__error avatar-url-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
