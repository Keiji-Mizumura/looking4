import classes from "../../styles/layout/signup-form.module.css";
import Button from "../ui/button";
import Logo from "../ui/logo";
import ErrorMessage from "../ui/error-message";

import { useRef, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { useAuth } from "../context/auth-context";

export default function SignupForm() {

  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { signup } = useAuth();

  async function handleSubmit(e){
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try{
      setError('');
      setLoading(true);
      await signup(email, password);
      router.push("/login");
    } catch {
      setError('Invalid Email or Password');
    }
    setLoading(false);
  }

  return (
    <div className={classes.signup}>
      {error && <ErrorMessage><p>{error}</p></ErrorMessage>}
      <Logo className={classes.logo} />
      <h2>Sign Up</h2>
      <img
        className={classes.google}
        src="\images\google_signin_buttons\web\2x\btn_google_signin_light_normal_web@2x.png"
      />
      <p className={classes.or}>or</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={emailRef} required/>
        <input type="password" placeholder="Password" ref={passwordRef} required/>
        <div className={classes.checkbox}>
            <input type="checkbox" required/>
            <label>
            I agree to the Looking4 <Link href="/about/terms"><a className={classes.link}>User Agreement</a></Link> and 
            <Link href="/about/terms"><a className={classes.link}>Privacy Policy</a></Link>.
            </label>
        </div>
        <Button disabled={loading}>Join Looking4</Button>
      </form>
    </div>
  );
}
