import classes from "./Card.module.css";

//so wrapping hides everthing with this card,so to make the content visible between the elemetns of the prop we make use of props.children

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
