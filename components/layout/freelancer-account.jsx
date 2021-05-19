import classes from "../../styles/layout/freelancer-account.module.css";
import Container from "../containers/container";
import Button from "../ui/button";

import { useRef, useState } from "react";

import { useAuth } from "../context/auth-context";
import ErrorMessage from "../ui/error-message";

import fileToDataUri from "../backend/image-blob";

import { useRouter } from "next/router";

import firebase from "../backend/firebase";

import { categories } from "../data/categories";

export default function FreelancerAccount() {
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
  const categoryRef = useRef();
  const specialtyRef = useRef();
  const introductionRef = useRef();
  const websiteRef = useRef();
  const experienceRef = useRef();

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
      freelancer: true,
      username: usernameRef.current.value,
      first_name: fnameRef.current.value,
      last_name: lnameRef.current.value,
      profile_picture: profileImage,
      gender: genderRef.current.value,
      birthday: birthdayRef.current.value,
      category: categoryRef.current.value,
      specialty: specialtyRef.current.value,
      introduction: introductionRef.current.value,
      website: websiteRef.current.value,
      experience: experienceRef.current.value,
      gigs: []
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
          <h1>Becoming a freelancer hasn't been this easy.</h1>
          <img src="/images/svgs/freelancing.svg" />
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

          <h2>Additional Information</h2>

          <div className={classes.row}>
            <div className={classes.col}>
              <label htmlFor="category">Category:</label>
              <select name="category" id="category" ref={categoryRef}>
                {categories.map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div className={classes.col}>
              <label htmlFor="profession">Specialty:</label>
              <input type="text" placeholder="e.g. Graphic Designing" ref={specialtyRef} required/>
            </div>
          </div>

          <label htmlFor="introduction">Self Introduction:</label>
          <input type="text" placeholder="Hello, I'm a ..." ref={introductionRef} required/>

          <label htmlFor="website">Website or Social Media Links</label>
          <input type="text" placeholder="www.example.org" ref={websiteRef} required/>

          <label htmlFor="experience">Experience in the field.</label>
          <select name="experience" id="experience" ref={experienceRef}>
              <option value="0">Less than a year</option>
              <option value="1">1-5 years</option>
              <option value="2">5 years and beyond</option>
          </select>

          <div className={classes.row}>
            <div className={classes.check}>
              <input type="checkbox" />
              <label htmlFor="checkbox" required>
                I Agree that all information above is correct and accurate.
              </label>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.check}>
              <input type="checkbox" />
              <label htmlFor="checkbox" required>
              I have read and agree to the Terms and Conditions of Looking4.
              </label>
            </div>
          </div>

          <Button>Start Freelancing</Button>
        </form>
      </Container>
    </div>
  );
}
