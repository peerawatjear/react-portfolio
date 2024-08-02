import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about_con} id="about">
      <div className={styles.about_list}>
        <div className={styles.about_item}>
          <h4 className={styles.about_title}>About Me</h4>
          <div>
            <div className={styles.about_text1}>
              <span className={styles.about_label}>Name : </span>
              <span className={styles.about_value}>Peerawat Jearjamroon</span>
            </div>
            <div className={styles.about_text1}>
              <span className={styles.about_label}>NickName : </span>
              <span className={styles.about_value}>Pong</span>
            </div>
            <div className={styles.about_text1}>
              <span className={styles.about_label}>MyBirthday : </span>
              <span className={styles.about_value}>26/12/2001</span>
            </div>
            <div className={styles.about_text1}>
              <span className={styles.about_label}>Age : </span>
              <span className={styles.about_value}>22 years</span>
            </div>
            <div className={styles.about_text1}>
              <span className={styles.about_label}>Hobby : </span>
              <span className={styles.about_value}>
                Playing games,Watching movies
              </span>
            </div>
          </div>
        </div>
        <div className={styles.about_item}>
          <h4 className={styles.about_title}>education</h4>
          <div>
            <div className={styles.about_text}>
              <span className={styles.about_label}>
                2020 - 2023 | SILPAKORN UNIVERSITY
              </span>
              <br />
              <span className={styles.about_value}>
                Faculty of Engineering and Industrial Technology
                <br />
                Major of Electronics and Computer Systems Engineering
                <br />
                GPA : 2.81{" "}
              </span>
            </div>
            <div className={styles.about_text}>
              <span className={styles.about_label}>
                2017 - 2019 | VISUTTHARANGSI SCHOOL
              </span>
              <br />
              <span className={styles.about_value}>
                Science-Mathematics
                <br />
                GPA : 3.42
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
