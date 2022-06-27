import React from "react";

import { obj, obj2, obj3, obj4, icons } from "./helpers";
import {Link} from "react-router-dom"
import logo from "../../assets/images/Moomkin.png"
import location from "../../assets/icons/locationIcon.svg"
import message from "../../assets/icons/sms.svg"
import styles from "./index.module.scss";
import "../../styles/_global.scss";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <div className={styles.about}>
            <Link to={"/"}><img src={logo} alt="logo"/></Link>
            <div className={styles.icons}>
                <img src={location} alt="location" className={styles.icon}/>
                <p>Location: Tashkent, Uzbekistan</p>
            </div> 
            <div className={styles.icons}>
                <img src={message} alt="location" className={styles.icon}/>
                <p>[email protected]</p>
            </div> 
            <div className={styles.networks}>
                {icons.map((item)=>(
                    <span key={item.icon}><img src={item.icon} alt="icon" /></span>
                ))}
            </div>
        </div>
        <ul>{obj.map((item) => (<li key={item.name}>{item.name}</li>))}</ul>
        <ul>{obj2.map((item) => (<li key={item.name}>{item.name}</li>))}</ul>
        <ul>{obj3.map((item) => (<li key={item.name}>{item.name}</li>))}</ul>
        <ul>{obj4.map((item) => (<li key={item.name}>{item.name}</li>))}</ul>
      </div>
      <hr />
      <span className="globalContainer">© 2012-2022</span>
    </footer>
  );
};

export default Footer;
