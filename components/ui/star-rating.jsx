import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classes from "../../styles/ui/star-rating.module.css";

export default function StartRating({ rating = 1 }){

    return(
        <div className={classes.star}>  
            <FontAwesomeIcon icon={faStar} className={rating >= 1 ? "" : classes.not_active}/>
            <FontAwesomeIcon icon={faStar} className={rating >= 2 ? "" : classes.not_active}/>
            <FontAwesomeIcon icon={faStar} className={rating >= 3 ? "" : classes.not_active}/>
            <FontAwesomeIcon icon={faStar} className={rating >= 4 ? "" : classes.not_active}/>
            <FontAwesomeIcon icon={faStar} className={rating >= 5 ? "" : classes.not_active}/>
        </div>
    )
}