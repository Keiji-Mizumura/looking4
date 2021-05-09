import classes from "../../styles/ui/button.module.css";

export default function Button(props){
    return (
        <button onClick={props.onClick} className={classes.btn + " " + props.className} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export function ButtonLight(props){
    return(
        <Button className={classes.btn_light} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </Button>
    )
}