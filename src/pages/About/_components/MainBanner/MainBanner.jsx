import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
import Title from "../../../../components/Title/Title";
const MainBanner = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <div className={styles.breadCrumb}>
          <Link to={"/"}>
            <span>Home</span>
          </Link>
          <span>About Us</span>
        </div>
        <Title title={"About us"} color={"#fff"} />
      </div>
    </section>
  );
};

export default MainBanner;
