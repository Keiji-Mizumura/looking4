import classes from "../../styles/layout/client-account.module.css";
import Container from "../containers/container";
import Button from "../ui/button";

import { useRef, useState } from "react";

import { useAuth } from "../context/auth-context";
import ErrorMessage from "../ui/error-message";

import fileToDataUri from "../backend/image-blob";

import { useRouter } from "next/router";

import firebase from "../backend/firebase";

export default function ClientAccount() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState(
    "/images/avatars/placeholder_avatar.png"
  );

  const usernameRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const genderRef = useRef();
  const birthdayRef = useRef();

  const { writeUserData, currentUser } = useAuth();

  function onProfileChange(file) {
    if (!file) {
      setProfileImage("/images/avatars/placeholder_avatar.png");
      return;
    }
    fileToDataUri(file).then((profilePic) => {
      setProfileImage(profilePic);
    });
  }

  async function handleAccount(e) {
    e.preventDefault();
    setError("");
    const user = {
      uid: currentUser.uid,
      email: currentUser.email,
      freelancer: false,
      username: usernameRef.current.value,
      first_name: fnameRef.current.value,
      last_name: lnameRef.current.value,
      profile_picture: profileImage,
      gender: genderRef.current.value,
      birthday: birthdayRef.current.value,
    };
    try {
      await writeUserData(user);
      router.push("/profile");
    } catch {
      setError("Database error");
    }
  }

  return (
    <div className={classes.client}>
      <Container>
        <div className={classes.heading}>
          <img src="/images/svgs/client-information.svg" />
          <h1>Just a few more steps to become a client</h1>
        </div>
        <form className={classes.form} onSubmit={handleAccount}>
          {error && (
            <ErrorMessage>
              <p>{error}</p>
            </ErrorMessage>
          )}
          <h2>Profile Picture</h2>
          <div className={classes.avatar}>
            <img src={profileImage} />
            <input
              type="file"
              onChange={(e) => onProfileChange(e.target.files[0] || null)}
              required
            />
            <label>Image must be clear and recent</label>
          </div>

          <h2>Personal Details</h2>

          <input
            type="text"
            placeholder="Username"
            ref={usernameRef}
            required
          />

          <div className={classes.row}>
            <input
              type="text"
              placeholder="First name"
              ref={fnameRef}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              ref={lnameRef}
              required
            />
          </div>

          <div className={classes.row}>
            <div className={classes.col}>
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" ref={genderRef}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={classes.col}>
              <label>Date of birth</label>
              <input type="date" ref={birthdayRef} required />
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.check}>
              <input type="checkbox" />
              <label htmlFor="checkbox" required>
                I Agree that all of the information above is correct and
                accurate.
              </label>
            </div>
          </div>

          <Button>Complete Registration</Button>
        </form>
      </Container>
    </div>
  );
}
