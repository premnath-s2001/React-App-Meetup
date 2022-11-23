import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavContext from "../store/favourite-context";

function FavoritesPage() {
  const FavCtx = useContext(FavContext);

  let content;

  if (FavCtx.totalFav === 0) {
    content = <p>You have no favorites ,Start adding some.......</p>;
  } else {
    content = <MeetupList meetupData={FavCtx.fav} />;
  }
  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
