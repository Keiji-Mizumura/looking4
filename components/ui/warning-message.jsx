import classes from "../../styles/ui/warning-message.module.css";

export default function WarningMessage(props){
    return(
        <div className={classes.warning}>
            {props.children}
        </div>
    )
}