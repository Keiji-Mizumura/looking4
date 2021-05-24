import classes from "../../styles/layout/profile.module.css";
import Container from "../containers/container";
import WarningMessage from "../ui/warning-message";

export default function Profile(props){

    const { user } = props;

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
                                <h3>Under Development....</h3>
                            </div>
                        </>
                }
            </Container>
        </div>
    )
}

