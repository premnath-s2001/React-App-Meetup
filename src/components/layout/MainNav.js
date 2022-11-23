import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../store/favourite-context";
import classes from "./MainNav.module.css";

//namning classname as module corresponds to the component and we could import it as
// import classes from "./MainNav.module.css";
//so classes in import will be a object containing class in css as property so
//object.property classes.header

function MainNav() {
  const Favctx = useContext(FavContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Mettups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              Favourite
              <span className={classes.badge}>{Favctx.totalFav}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
