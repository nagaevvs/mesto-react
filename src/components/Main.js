import React from "react";
import userApi from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("1");
  const [userDescription, setUserDescription] = React.useState("2");
  const [userAvatar, setUserAvatar] = React.useState("4");
  const [cards, setCards] = React.useState({});

  React.useEffect(() => {
    Promise.all([userApi.getUserData(), userApi.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name" name="profileName">
              {userName}
            </h1>
            <p className="profile__about" name="profileAbout">
              {userDescription}
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
        {Object.values(cards).map((card, id) => (
          <Card
            key={card._id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
