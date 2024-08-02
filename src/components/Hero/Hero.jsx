import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Photo from "/src/components/Image/IMG_1266.jpg";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello, it's me</p>
            <h3 className={styles.text_2}>Peerawat Jearjamroon</h3>
            <p className={styles.text_3}>
              <TypeAnimation
                sequence={[
                  "Electronics and Computer Systems Engineering",
                  1000,
                  "E",
                ]}
                speed={70}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              As a recent graduate, I am committed to developing my professional
              <br />
              skills in my field of study, applying my knowledge to advance the
              <br />
              organization, and gaining work experience to grow alongside the
              organization.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/peerawatjear" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/peerawat-jearjamroon"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100008266514595&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img className={styles.hero_img} src={Photo} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.Blur1} />
      <div className={styles.Blur2} />
      <div className={styles.Blur3} />
    </div>
  );
}

export default Hero;
