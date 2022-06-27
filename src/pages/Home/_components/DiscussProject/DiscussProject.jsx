import React from "react";
import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const DiscussProject = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <p className={styles.titles}>LET'S DISCUSS YOUR PROJECT</p>
        <form>
          <div className={styles.inputs}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="submit" value={"GET IN TOUCH"} className={styles.button} />
          </div>
          <div className={styles.check}>
            <input type="checkbox" />
            <p>I agree with <b>Privacy Policy</b></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscussProject;
