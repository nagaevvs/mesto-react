import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ onConfirm, card, isLoading, isOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm(card);
  }

  return (
    <>
      <PopupWithForm
        isLoading={isLoading}
        title="Вы уверены?"
        name="form-confirm"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonTextLoadingTrue="Удаление..."
        buttonTextLoadingFalse="Да"
      />
    </>
  );
}

export default ConfirmPopup;
