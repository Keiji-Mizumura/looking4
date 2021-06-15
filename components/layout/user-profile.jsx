import Container from "../containers/container";

import classes from "../../styles/layout/user-profile.module.css";
import Button from "../ui/button";
import WarningMessage from "../ui/warning-message";

import { useAuth } from "../context/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UserProfile() {
  const { currentUser } = useAuth();

  const router = useRouter();

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
                <p>I'm looking for skilled freelancers that gets the job done.</p>
                <Button onClick={() => router.push("/profile/account-client")}>Continue as Client</Button>
              </div>
              <div className={classes.freelancer}>
                <img src="/images/svgs/freelancer.svg" />
                <h2>I'm a freelancer</h2>
                <p>I want to promote my skills and earn money.</p>
                <Button onClick={() => router.push("/profile/account-freelancer")}>Continue as Freelancer</Button>
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
