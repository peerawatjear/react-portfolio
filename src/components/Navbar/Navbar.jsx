import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

function Navbar() {
  const [isToggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!isToggled);
  }
  window.onscroll = function () {
    changeNavbarBackground();
  };

  function changeNavbarBackground() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.backgroundColor = "rgba(4, 21, 45, 0.9)";
      navbar.style.paddingTop = "10px";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
      navbar.style.paddingTop = "35px";
    }
  }

  return (
    <nav id="navbar">
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="/">RESUME</a>
          </div>

          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}>
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                <a href="#">Experience</a>
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                <a href="#">Project</a>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <a href="#">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bar} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
            <li>
              <Link to="about" smooth={true} duration={500}>
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                <a href="#">Experience</a>
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                <a href="#">Project</a>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <a href="#">Contact</a>
              </Link>
            </li>
            </ul>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
