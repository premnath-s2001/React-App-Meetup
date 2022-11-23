import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavContext from "../../store/favourite-context";

function MeetupItem(props) {
  const favContext = useContext(FavContext);
  const itemsIsFavorite = favContext.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemsIsFavorite) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        desc: props.description,
      });
    }
  }

  return (
    <li className={classes.item} key={props.key}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt=""></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address} </address>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemsIsFavorite ? "Remove from favourites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

//so wrapping hides everthing with this card,so to make the content visible between the elemetns of the prop we make use of props.children
