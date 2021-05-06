import classes from "../../styles/layout/signup-form.module.css";
import Button from "../ui/button";
import Logo from "../ui/logo";

import Link from "next/link";

export default function SignupForm() {
  return (
    <div className={classes.signup}>
      <Logo className={classes.logo} />
      <h2>Sign Up</h2>
      <img
        className={classes.google}
        src="\images\slides\google_signin_buttons\web\2x\btn_google_signin_light_normal_web@2x.png"
      />
      <p className={classes.or}>or</p>
      <form className={classes.form}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className={classes.checkbox}>
            <input type="checkbox" />
            <label>
            I agree to the Looking4 <Link href="/about/terms"><a className={classes.link}>User Agreement</a></Link> and 
            <Link href="/about/terms"><a className={classes.link}>Privacy Policy</a></Link>.
            </label>
        </div>
        <Button>Join Looking4</Button>
      </form>
    </div>
  );
}
