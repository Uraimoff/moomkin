import React from 'react';
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb';
import styles from './AddTechMarketing.module.scss';

const AddTechMarketing = () => {
  const data =[
    {
      label: "sdsd",
      link: "/dwed"
    },
    {
      label: "sdsasad",
      link: ""
    },
  ]
  return (

    <section className={styles.container}>
      hgjgjgjh
      <BreadCrumb menu={data}/>
    </section>

  )
}

export default AddTechMarketing;