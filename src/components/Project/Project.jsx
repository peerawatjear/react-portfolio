import React from "react";
import styles from "./Project.module.css";
import { FaFilePdf } from "react-icons/fa6";
import paper from "/src/components/PDF/Paper.pdf";

function Project() {
  return (
    <div className={styles.project_con} id="project">
      <h4 className={styles.project_title}>My Project</h4>
      <h4 className={styles.project_text}>
        Real-time Temperature and Water Level Warning System for Yarn Extrusion
        Machine
      </h4>
      <div className={styles.project_boxtext}>
        <p className={styles.project_text1}>
          Real-time cooling tank temperature and water level notification system
          using internet-of-things technology. The system consists of an Arduino
          UNO R3 microcontroller receiving temperature and water level values
          from temperature sensors and ultrasonic sensor (Waterproof Ultrasonic
          Module) and performing onscreen display of the values. When the
          temperature or water level exceeded the threshold, the system
          wirelessly sent notification message and temperature or water level
          values to the line group of maintenance engineers and, at the same
          time, stored the warning record in the Google sheet. After
          installation and test a warning system, it was found that the system
          can notify the warning information via line group with 100% accuracy
          and approximately 2 second delay. In addition, user satisfaction of
          the system was good.
        </p>
        <div className={styles.boxBtn}>
          <a href={paper} className={styles.projectBtn} target="_blank">
          <FaFilePdf />  Paper
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
