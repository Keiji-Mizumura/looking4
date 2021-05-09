import classes from "../../styles/layout/login-form.module.css";
import Button from "../ui/button";
import Logo from "../ui/logo";
import ErrorMessage from "../ui/error-message";

import Link from "next/link";

import { useState, useRef } from "react";

import { useAuth } from "../context/auth-context";

import { useRouter } from "next/router";

export default function LoginForm() {

  const { login } = useAuth();

  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleSubmit(e){
    e.preventDefault();
    try{
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      setError("");
      setLoading(true);
      await login(email, password);
      router.push("/profile");

    } catch {
      setError("Failed to sign in");
    }
  }

  return (
    <div className={classes.login}>
      {error && <ErrorMessage><p>ERROR LOGGING IN</p></ErrorMessage>}
      <Logo className={classes.logo} />
      <h2>Welcome Back</h2>
      <img
        className={classes.google}
        src="\images\google_signin_buttons\web\2x\btn_google_signin_light_normal_web@2x.png"
      />
      <p className={classes.or}>or</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={emailRef} required/>
        <input type="password" placeholder="Password" ref={passwordRef} required/>
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
