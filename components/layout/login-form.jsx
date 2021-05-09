import classes from "../../styles/layout/login-form.module.css";
import Button from "../ui/button";
import Logo from "../ui/logo";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className={classes.login}>
      <Logo className={classes.logo} />
      <h2>Welcome Back</h2>
      <img
        className={classes.google}
        src="\images\google_signin_buttons\web\2x\btn_google_signin_light_normal_web@2x.png"
      />
      <p className={classes.or}>or</p>
      <form className={classes.form}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className={classes.checkbox}>
            <input type="checkbox" />
            <label>
            Remember Me
            </label>
        </div>
        <Link href="/">
            <a className={classes.link}>Forgot Password?</a>
        </Link>
        <Button>Log In</Button>
        <div className={classes.others}>
            <p>
            Don't have an account? <Link href="/signup"><a>Signup</a></Link>
            </p>
        </div>
      </form>
    </div>
  );
}
