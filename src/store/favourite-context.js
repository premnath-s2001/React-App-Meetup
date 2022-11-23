import { createContext, useState } from "react";

//obj created by context will contains  a coomponents

const FavContext = createContext({
  fav: [],
  totalFav: 0,
  //   addFavoriteHandler: (favMeetUp) => {},
  //   addFavoriteHandler: (meetUpID) => {},
  //   isFavoriteHandler: (meetUpID) => {},
});

export function FavContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  function addFavoriteHandler(favMeetUp) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favMeetUp);
    });
  }

  function removeFavoriteHandler(meetUpID) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetUpID);
    });
  }

  function isFavoriteHandler(meetUpID) {
    return userFav.some((meetup) => meetup.id === meetUpID);
  }
  //   some returns true or false if one evaluates to true or false in item

  const context = {
    fav: userFav,
    totalFav: userFav.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return (
    <>
      <FavContext.Provider value={context}>
        {props.children}
      </FavContext.Provider>
    </>
  );
}

export default FavContext;
