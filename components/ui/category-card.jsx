import classes from "../../styles/ui/category-card.module.css";

export default function CategoryCard(props){
    return(
        <div className={classes.card}>
               {props.children} 
               <div className={classes.overlay}>
                   <h1>{props.title}</h1>
                   <h3>{props.subtitle}</h3>
               </div>
        </div>
    )
}