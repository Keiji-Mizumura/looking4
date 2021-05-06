import Button, { ButtonLight } from "../ui/button";
import classes from "../../styles/layout/hero.module.css";
import Container from "../containers/container";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";

export default function Hero() {

  const [imageStyle, setImageStyle] = useState({});

  const router = useRouter();

  useEffect(()=>{
    setImageStyle({
      backgroundImage: "url(/images/slides/cover.jpg",
    })
  },[]);

  setInterval(function(){
    setImageStyle({
      backgroundImage: "url(/images/slides/cover2.jpg",
    })
  }, 5000);

  return (
    <div className={classes.hero} style={imageStyle}>
      <Container>
        <div className={classes.text}>
          <h1>
            Look4 the best
            <br />
            freelancers for any project.
          </h1>
          <h2>
            Search for talents that can turn your ideas into reality.
          </h2>
          <div className={classes.buttons}>
            <Button>Look4 Freelancers</Button>
            <ButtonLight onClick={() => router.push("/signup")}>Become a Freelancer</ButtonLight>
          </div>
        </div>
      </Container>
    </div>
  );
}
