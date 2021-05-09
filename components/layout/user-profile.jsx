import Container from "../containers/container";

import classes from "../../styles/layout/user-profile.module.css";
import Button from "../ui/button";

import { useAuth } from "../context/auth-context";

export default function UserProfile() {
  const { currentUser } = useAuth();

  return (
    <div className={classes.profile}>
      <Container>
        {currentUser ? (
          <>
            <h1>Choose your account type.</h1>
            <div className={classes.options}>
              <div className={classes.client}>
                <img src="/images/svgs/client.svg" />
                <h2>Looking4 Freelancers?</h2>
                <Button>Client</Button>
              </div>
              <div className={classes.freelancer}>
                <img src="/images/svgs/freelancer.svg" />
                <h2>I'm a freelancer</h2>
                <Button>Freelancer</Button>
              </div>
            </div>
          </>
        ) : (
          <h1>Please Login to use this page.</h1>
        )}
      </Container>
    </div>
  );
}
