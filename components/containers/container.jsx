import classes from "../../styles/containers/container.module.css";

export default function Container(props){
    return(
        <div className={classes.container}>
            {props.children}
        </div>
    )
}