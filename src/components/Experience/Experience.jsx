import React from "react";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={styles.experience_con}>
      <h4 className={styles.experience_title}>Experience</h4>
      <div className={styles.experience_list}>
        <div>
          <h2 className={styles.experience_toplabel}>co - operative education</h2>
          <h3 className={styles.experience_label}>Lucky Star Weaving Plus Company Limited</h3>
          <span className={styles.experience_label}>Period : </span>
          <span className={styles.experience_value}>19 June 2023 to 6 October 2023 (4 months)</span>
          <h4 className={styles.experience_value}>Maintenance Department</h4>
        </div>
        <div>
          <h2 className={styles.experience_toplabel}>Internship
          </h2>
          <h3 className={styles.experience_label}>National Telecom Public Company Limited
          </h3>
          <span className={styles.experience_label}>Period : </span>
          <span className={styles.experience_value}>18 April 2023 to 16 June 2023 (2 months)</span>
          <h4 className={styles.experience_value}>Sales and Engineering Service Center</h4>
        </div>
      </div>
    </div>
  );
}

export default Experience;
