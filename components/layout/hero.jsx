import Button, { ButtonLight } from "../ui/button";
import classes from "../../styles/layout/hero.module.css";
import Container from "../containers/container";

import { Fragment } from "react";

import { useRouter } from "next/router";
import SlideShow from "../ui/slideshow";

export default function Hero() {

  const router = useRouter();

  return (
    <Fragment>
    <div className={classes.image_slider}>
      <SlideShow />
    </div>
      <div className={classes.hero}>
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
              <Button onClick={() => router.push("/browse")}>Look4 Freelancers</Button>
              <ButtonLight onClick={() => router.push("/signup")}>Become a Freelancer</ButtonLight>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
