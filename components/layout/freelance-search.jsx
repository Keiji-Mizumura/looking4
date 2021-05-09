import Container from "../containers/container";
import Button from "../ui/button";

import classes from "../../styles/layout/freelance-search.module.css";

export default function FreelanceSearch(){
    return(
        <div className={classes.search}>
            <img src="/images/slides/cover3.jpg" />
            <Container>
                <form className={classes.form}>
                    <h1>Look4 available freelancers</h1>
                    <input type="search" placeholder="search"/>
                    <label htmlFor="select">Category</label>
                    <select>
                        <option value="">Art</option>
                        <option value="">Nisi?</option>
                        <option value="">Debitis?</option>
                        <option value="">Facilis!</option>
                        <option value="">Culpa.</option>
                        <option value="">Tenetur.</option>
                        <option value="">Omnis?</option>
                        <option value="">A.</option>
                        <option value="">Quas?</option>
                        <option value="">Exercitationem.</option>
                        <option value="">Quidem?</option>
                        <option value="">Reiciendis.</option>
                        <option value="">Officiis!</option>
                        <option value="">Inventore.</option>
                        <option value="">Id.</option>
                        <option value="">Dolorem.</option>
                        <option value="">Iure!</option>
                        <option value="">Ullam!</option>
                        <option value="">Recusandae.</option>
                        <option value="">Doloremque?</option>
                    </select>
                    <Button>
                        Search
                    </Button>
                </form>
            </Container>
        </div>
    )
}