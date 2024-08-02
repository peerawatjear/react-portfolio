import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_wrapper} id="contact">
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3 className={styles.contact_title}>Contact</h3>
          <div className={styles.contact_box}>
            <p className={styles.contact_address}>
              334/2 KD Place Charoennakhon Rd., Khlong San, Khlong San,
              Bangkok,10600
            </p>
          </div>

          <div className={styles.contact_box}>
            <p className={styles.contact_address}>
              <FaPhone />
              (+66) 87 171 4884
            </p>
          </div>

          <div className={styles.contact_box}>
            <p className={styles.contact_address}>
              <FaEnvelope />
              peerawat.jear@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
