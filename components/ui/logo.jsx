import classes from "../../styles/ui/logo.module.css";

import Link from "next/link";

export default function Logo(){
    return(
        <div className={classes.logo}>
            <Link href="/">
                <a>
                    <img src="/logo/looking4_logo.png" />
                </a>
            </Link>
        </div>
    )
}