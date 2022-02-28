import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name" name="profileName">
              {currentUser.name}
            </h1>
            <p className="profile__about" name="profileAbout">
              {currentUser.about}
            </p>
            <button
              className="profile__edit-button"
              onClick={props.onEditProfile}
              type="button"
            />
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        />
      </section>
      <div className="elements">
        {Object.values(props.cards).map((card, id) => (
          <Card
            key={card._id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
