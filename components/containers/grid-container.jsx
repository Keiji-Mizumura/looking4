import classes from "../../styles/containers/grid-container.module.css";

export default function GridContainer(props){
    return (
        <div className={classes.grid}>
            {props.children}
        </div>
    )
}