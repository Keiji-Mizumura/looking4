import StartRating from "./star-rating";

import classes from "../../styles/ui/freelance-card.module.css";
import Link from "next/link";

export default function FreelanceCard(props) {
  return (
    <div className={classes.card}>
      <Link href={props.link}>
      <a>
      <img src={props.cover} className={classes.image} />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div className={classes.user}>
          <img src={props.url} />
          <div className={classes.stats}>
            <h1>{props.username}</h1>
            <p>{props.userstats}</p>
          </div>
        </div>
        <div className={classes.title}>
          <h1>{props.title}</h1>
          <div className={classes.rating}>
            <StartRating rating={props.rating}/> 
            <p>{props.rating}/5.0</p>
          </div>
        </div>
      </div>
      </a>
      </Link>
    </div>
  );
}
