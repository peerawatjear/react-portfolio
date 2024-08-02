import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt="" />
          <h4>Jone Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h4>Jane Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img src="https://plus.unsplash.com/premium_photo-1666265087928-fe19db9887ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h4>Joe Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
