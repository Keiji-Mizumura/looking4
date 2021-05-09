import Container from "../containers/container";

import Button from "../ui/button";

import classes from "../../styles/layout/search-bar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(){
    return(
        <div className={classes.searchbar}>
            <Container>
                <form className={classes.form}>
                    <input type="text" placeholder="Search Freelance"/>
                    <select>
                        <option value="">Finance</option>
                        <option value="">Possimus!</option>
                        <option value="">Quisquam?</option>
                        <option value="">Nesciunt.</option>
                        <option value="">Mollitia?</option>
                        <option value="">Molestias.</option>
                        <option value="">Quod.</option>
                        <option value="">Deserunt?</option>
                        <option value="">Nulla.</option>
                        <option value="">Nemo?</option>
                        <option value="">Facere.</option>
                        <option value="">Ut?</option>
                        <option value="">Harum?</option>
                        <option value="">Corrupti?</option>
                        <option value="">Odit?</option>
                        <option value="">Impedit!</option>
                        <option value="">Fugit!</option>
                        <option value="">Voluptatibus.</option>
                        <option value="">Minima.</option>
                        <option value="">Itaque.</option>
                    </select>
                    <Button><FontAwesomeIcon icon={faSearch} /> Search</Button>
                </form>
            </Container>
        </div>
    )
}