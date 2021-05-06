import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "../../styles/ui/text-card.module.css";

export default function TextCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <FontAwesomeIcon icon={props.icon} className={classes.icon}/>
        <h1>{props.heading}</h1>
      </div>
      <div className={classes.items}>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  );
}
