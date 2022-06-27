import React from "react";
import Title from "../../../../components/Title/Title";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const ProjectAnalysis = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <Title
          title={"Let’s start with a free project analysis & quote!"}
          color={"#fff"}
        />
        <form>
          <div className={styles.form}>
            <textarea
              name=""
              id=""
              placeholder="Tell us about your project"
              className={styles.input}
            ></textarea>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
          </div>
            <div className={styles.check}>
                <input type="checkbox" />
                <p>I agree with <b>Privacy Policy</b></p>
            </div>
            <button>LET'S GET STARTED</button>
        </form>
      </div>
    </section>
  );
};

export default ProjectAnalysis;
