import classes from "../../styles/layout/home-content.module.css";
import Container from "../containers/container";
import TextCard from "../ui/text-card";
import { faBriefcase, faSearch, faMoneyBillWave, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import GridContainer from "../containers/grid-container";

export default function HomeContent(){
    return(
        <div className={classes.content}>
            <Container>
                <h1 className={classes.title}>Awesome Features</h1>
                <GridContainer>
                    <TextCard
                        icon={faSearch}
                        heading="Look4 suitable freelancers"
                        content="Find a freelancer that gets the job done. A wide variety of skills and talent can be discovered through Looking4."
                    />
                    <TextCard
                        icon={faBriefcase}
                        heading="Start freelancing"
                        content="Create an account to start earning and show everyone your skills and talents."
                    />
                    <TextCard
                        icon={faMoneyBillWave}
                        heading="100% Cash back guarantee"
                        content="Having problems with our freelancer? Don't worry, we have a 7 day cash back guarantee in case of problems occuring to the received product or service."
                    />
                    <TextCard
                        icon={faInfoCircle}
                        heading="24/7 Customer Support"
                        content="Our reliable customer support is always live for your needs and demands."
                    />
                </GridContainer>
                
            </Container>
        </div>
    )
}