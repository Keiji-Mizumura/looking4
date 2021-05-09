import Button from "../ui/button";

import classes from "../../styles/ui/navigation.module.css";

import Link from "next/link";

import { useRouter } from "next/router";

export default function Navigation(){

    const router = useRouter();

    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/browse"><a>Browse Freelancers</a></Link>
                </li>
                <li>
                    <Link href="/login"><a>Login</a></Link>
                </li>
                <li>
                    <Button onClick={()=> router.push("/signup")}>Create Account</Button>
                </li>
            </ul>
        </nav>
    )
}