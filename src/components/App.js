import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setselectedCard] = React.useState({});
  const [isClikedImage, setIsClikedImage] = React.useState(false);

  function handleEditProfileClick(e) {
    e.preventDefault();
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick(e) {
    e.preventDefault();
    setisEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick(e) {
    e.preventDefault();
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setselectedCard(card);
    setIsClikedImage(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setselectedCard(false);
    setIsClikedImage(false);
    setselectedCard({});
  }

  return (
    <>
      <ImagePopup
        card={selectedCard}
        isCliked={isClikedImage}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title="Редактировать порофиль"
        name="formprofile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="name-input"
          type="text"
          name="name"
          required=""
          placeholder="Имя"
          minLength={2}
          maxLength={40}
        />
        <span className="popup__error name-input-error" />
        <input
          className="popup__input"
          id="job-input"
          type="text"
          name="job"
          required=""
          placeholder="О себе"
          minLength={2}
          maxLength={200}
        />
        <span className="popup__error job-input-error" />
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="formcard"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
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
          className="popup__input"
          id="url-input"
          type="url"
          name="image"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__error url-input-error" />
      </PopupWithForm>

      <PopupWithForm
        title="Обновить Ааватар"
        name="formavatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="avatar-url-input"
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          required=""
        />
        <span className="popup__error avatar-url-input-error" />
      </PopupWithForm>

      <div id="popup-confirm" className="popup">
        <div className="popup__container container">
          <button className="popup__button-close" type="button" />
          <h2 className="popup__title popup__title_margin_small">
            Вы уверены?
          </h2>
          <div className="popup__frame">
            <button
              id="confirm-button"
              className="popup__button popup__button_without-form"
              type="button"
            >
              Да
            </button>
          </div>
        </div>
      </div>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <template id="element" />
      </div>
    </>
  );
}

export default App;
