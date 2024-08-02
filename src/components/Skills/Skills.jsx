import React from 'react'
import styles from "./Skills.module.css";
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaNode } from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li><FaHtml5 /></li>
        <li><FaCss3 /></li>
        <li><FaReact /></li>
        <li><FaGitAlt /></li>
        <li><FaNode /></li>
      </ul>
    </div>
  )
}

export default Skills
