import React from "react";
import Title from "../../../../components/Title/Title";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const OurClients = () => {
  return (
    <section className={`${styles.container} globalContainer`}>
      <Title title={"Our Clients"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laudantium maiores numquam iste iusto perspiciatis, sint eligendi ad
        aliquid officia ducimus fugiat illo molestiae animi est ipsam eaque!
        Dignissimos, dicta laborum possimus velit odit voluptatibus blanditiis
        repudiandae molestiae, sunt labore corrupti non, debitis quo veniam vel
        sit accusantium officia consequatur? Rerum, natus, perferendis deleniti
        ratione cumque sequi perspiciatis eaque corrupti dicta quaerat nulla
        corporis blanditiis magni excepturi, nemo omnis deserunt in.
        Consequatur, inventore veniam dolore quo ipsam temporibus nobis.
        Voluptatum!
      </p>
    </section>
  );
};

export default OurClients;
