import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirm(props.card);
  }

  return (
    <>
      <PopupWithForm
        isLoading={props.isLoading}
        title="Вы уверены?"
        name="form-confirm"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        buttonTextLoadingTrue="Удаление..."
        buttonTextLoadingFalse="Да"
      />
    </>
  );
}

export default ConfirmPopup;
