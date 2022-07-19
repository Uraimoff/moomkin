import React, { useState } from "react";
import { Dropdown } from "antd";
import { data } from "./helpers";
import logo from "../../assets/images/Moomkin.png";
import logo2 from "../../assets/images/Moomkin2.png";
import menuWhite from "../../assets/images/menu.png";
import menuBlack from "../../assets/images/menu2.png";
import close from "../../assets/images/close.png";

import styles from "./index.module.scss";
import "../../styles/_global.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [change, setChange] = useState("white");
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 5) {
      setChange("blue");
    } else {
      setChange("white");
    }
  }

  return (
    <nav
      className={
        change === "white" ? `${styles.navigation}` : `${styles.navigation2}`
      }
    >
      <div className={`${styles.navContainer} globalContainer`}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={change === "white" ? logo : logo2} alt="logo" />
          </Link>
        </div>

        {data.map((item) => (
          <ul style={{ marginTop: "15px" }}>
            <Dropdown overlay={item.menu} placement="bottom">
              <ul>
                <Link to={item.link}>
                  <li>{item.title}</li>
                </Link>
                <i>{item.icon}</i>
              </ul>
            </Dropdown>
          </ul>
        ))}

        <div className={styles.buttons}>
          <button className={styles.contact}>Ibrohim</button>
          <img
            src={change === "white" ? menuWhite : menuBlack}
            alt="menu"
            width={25}
            height={25}
            onClick={() => setOpen(true)}
          />
        </div>

        <div className={open ? styles.resMenu2 : styles.resMenu}>
          <div className={styles.resContainer}>
            <div className={styles.logo}>
              <Link to={"/"}>
                <img src={logo2} alt="logo" onClick={() => setOpen(false)} />
              </Link>
            </div>
            <div className={styles.btns}>
              <button className={styles.contact}>CONTACT</button>
              <img src={close} alt="img" onClick={() => setOpen(false)} />
            </div>
          </div>
          <ul className={styles.resTitles}>
            <li>
              <a href="/#services">SERVICES</a>
            </li>
            <li>
              <a href="/#expertise">EXPERTISE</a>
            </li>
            <li>
              <a href="/#numbers">NUMBERS</a>
            </li>
            <Link to={"/about"}>
              <li onClick={() => setOpen(false)}>ABOUT US</li>
            </Link>
            <li>
              <a href="/#services">INSIGHTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
