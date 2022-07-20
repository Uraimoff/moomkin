import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCrumb.module.scss";
const BreadCrumb = ({ menu }) => (
  <section className={styles.breadCrumb}>
    <Breadcrumb >
    <Breadcrumb.Item><Link to={"/"} className={styles.breadCrumbItem}>Home</Link></Breadcrumb.Item>
      {menu.map((item) => (
        <Breadcrumb.Item >
          <Link to={item.link} className={styles.breadCrumbItem}>{item.label}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </section>
);

export default BreadCrumb;
