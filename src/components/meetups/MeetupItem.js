import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
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
          <button>To favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

//so wrapping hides everthing with this card,so to make the content visible between the elemetns of the prop we make use of props.children
