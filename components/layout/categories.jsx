import Container from "../containers/container";
import CategoryCard from "../ui/category-card";
import MultipleItems from "../ui/multiple-items";

import classes from "../../styles/layout/categories.module.css";

export default function Categories() {

    const categories = [
        {
            title: "IT Support",
            subtitle: "Find Technology Geeks",
            path: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        },
        {
            title: "Logo Design",
            subtitle: "Build your business logo",
            path: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        },
        {
            title: "Photography",
            subtitle: "Take stunning pictures",
            path: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        },
        {
            title: "Web Design",
            subtitle: "Create your personalized website",
            path: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        },
        {
            title: "Art",
            subtitle: "Craftmanship at its finest",
            path: "https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        },
        {
            title: "Music",
            subtitle: "Liven up that spirit",
            path: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    ]



  return (
    <div className={classes.categories}>
      <Container>
        <h1 className={classes.title}>Popular services at the moment</h1>
        <MultipleItems slides={4}>
          {categories.map((item, index) => <CategoryCard key={index} title={item.title} subtitle={item.subtitle}><img src={item.path} /></CategoryCard>)}
        </MultipleItems>
      </Container>
    </div>
  );
}
