import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from 'react-icons/fa6'

function Navbar() {

  const [isToggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!isToggled)
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
        <div className={styles.logo}>
            <a href="#">RESUME</a>
        </div>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bar} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
