import Button from "../ui/button";
import classes from "../../styles/ui/navigation.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const { currentUser, logout } = useAuth();

  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogout() {
    const test = confirm("Are you sure you want to logout?");
    setError("");
    if (test) {
      try {
        await logout();
        router.push("/");
      } catch {
        setError("Failed logging out!");
      }
    }
  }

  return (
    <nav className={classes.navigation}>
      {error && <p>{error}</p>}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/browse">
            <a>Browse Freelancers</a>
          </Link>
        </li>
        {!currentUser ? 
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          :
          <li>
              <Link href="/profile">
                  <a>Profile</a>
              </Link>
          </li>
        }
        <li>
          {currentUser ? (
            <Button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button>
          ) : (
            <Button onClick={() => router.push("/signup")}>
              Create Account
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}
