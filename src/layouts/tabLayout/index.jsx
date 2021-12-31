import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Tab from './Tab';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.body}>
        <Nav />
        <Tab />
      </div>
    </div>
  );
}
