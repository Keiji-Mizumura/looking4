import Button from "../../components/ui/button";
import classes from "../../styles/layout/profile.module.css";
import Container from "../containers/container";
import WarningMessage from "../ui/warning-message";

import firebase from "../backend/firebase";

import fileToDataUri from "../backend/image-blob";

import { useRef, useState } from "react";

export default function Profile(props){

    const { user } = props;

    const [profileImage, setProfileImage] = useState(
        "/images/avatars/placeholder_avatar.png"
    );

    function onProfileChange(file) {
        if (!file) {
          setProfileImage("/images/avatars/placeholder_avatar.png");
          return;
        }
        fileToDataUri(file).then((profilePic) => {
          setProfileImage(profilePic);
        });
    }

    const gigTitle = useRef();
    const gigDescription = useRef();

    function handleGig(e){
        e.preventDefault();
        const title = gigTitle.current.value;
        const desc = gigDescription.current.value;
        const image = profileImage;
        const gigRef = firebase.database().ref('gig');
        const gig = {
            user: user.uid,
            title,
            desc,
            image
        }
        gigRef.push(gig);
    }

    return(
        <div className={classes.profile}>
            <Container>
                <div className={classes.cover}>
                    {
                        user.freelancer ?
                        <h1>FREELANCER</h1>
                        :
                        <h1>CLIENT</h1>
                    }
                    <img src={user.profile_picture} alt="profile_image" />
                </div>
                <div className={classes.profile_name}>
                    <h1>{user.username}</h1>
                    <h3>({user.first_name} {user.last_name})</h3>
                </div>
                {
                        user.freelancer &&
                        <>
                            <div className={classes.introduction}>
                                <h1>"{user.introduction}"</h1>
                            </div>
                            <div className={classes.freelance_profile}>
                                <h3>Category:</h3>
                                <h3>{user.category}</h3>
                            </div>
                            <div className={classes.freelance_profile}>
                                <h3>Specialty:</h3>
                                <h3>{user.specialty}</h3>
                            </div>
                            <div className={classes.freelance_profile}>
                                <h3>Website:</h3>
                                <h3>{user.website}</h3>
                            </div>
                            <div className={classes.freelance_profile}>
                                <h3>Gigs:</h3>
                            </div>
                            <form className={classes.gig_create} onSubmit={handleGig}>
                                <div>
                                    <label for="Title">Gig Title: </label>
                                    <input type="text" placeholder="Title" ref={gigTitle}/>
                                </div>
                                <div>
                                    <label for="Title">Description: </label>
                                    <input type="text" placeholder="Description" ref={gigDescription}/>
                                </div> 
                                <div>
                                    <label for="Upload Image">Image: </label>
                                    <input type="file" onChange={(e) => onProfileChange(e.target.files[0] || null)}/>
                                </div>
                                <Button>Create Gig</Button>
                            </form>  
                        </>
                }
            </Container>
        </div>
    )
}

