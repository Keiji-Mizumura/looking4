import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import classes from "../../styles/ui/error-message.module.css";

export default function ErrorMessage(props){
    return(
        <div className={classes.error}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            {props.children}
            <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
    )
}