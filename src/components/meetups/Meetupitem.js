import Card from "../ui/Card";
import classes from "./Meetupitem.module.css";

function Meetupitem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.item}
            src={props.image}
            alt={props.title}
            width="600"
            height="300"
          />
          <h3 className={classes.content}>{props.title}</h3>
          <address className={classes.content}>{props.address}</address>
          <p className={classes.content}>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default Meetupitem;
