import Container from "../containers/container";

import classes from "../../styles/layout/home-feedback.module.css";

export default function HomeFeedback(){
    return(
        <div className={classes.feedback}>
            <Container>
                <div className={classes.half}>
                    <img src="/images/svgs/marketing.svg" />
                    <div>
                        <h1>We expand your market</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia distinctio maxime velit sint iste dignissimos quaerat quos, doloremque error minus explicabo cumque consectetur laudantium temporibus quisquam perferendis sit dicta et.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}