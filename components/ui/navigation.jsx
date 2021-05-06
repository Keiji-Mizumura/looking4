import Button from "../ui/button";

import classes from "../../styles/ui/navigation.module.css";

import Link from "next/link";

export default function Navigation(){
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Browse Freelancers</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Login</a></Link>
                </li>
                <li>
                    <Button>Create Account</Button>
                </li>
            </ul>
        </nav>
    )
}