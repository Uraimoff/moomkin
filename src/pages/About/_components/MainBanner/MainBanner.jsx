import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
import Title from "../../../../components/Title/Title";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
const MainBanner = () => {
  const menu = [
    {
      link: "",
      label: "About us",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <div className={styles.breadCrumb}>
         <BreadCrumb menu={menu}/>
        </div>
        <Title title={"About us"} color={"#fff"} />
      </div>
    </section>
  );
};

export default MainBanner;
