import classes from "../../styles/layout/client-account.module.css";
import Container from "../containers/container";
import Button from "../ui/button";

export default function ClientAccount(){
    return(
        <div className={classes.client}>
            <Container>
                <div className={classes.heading}>
                    <img src="/images/svgs/client-information.svg" />
                    <h1>Just a few more steps</h1>
                </div>
                <div className={classes.form}>
                    <h2>Personal Details</h2>
                    <div className={classes.avatar}>
                        <img src="/images/avatars/placeholder_avatar.png" />
                        <input type="file" />
                        <label>Image must be clear and recent</label>
                    </div>
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <Button>Continue</Button>
                </div>
            </Container>
        </div>
    )
}