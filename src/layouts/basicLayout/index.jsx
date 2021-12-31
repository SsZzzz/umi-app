import React from 'react';
import Header from './Header';
import Nav from './Nav';
import styles from './index.less';

export default function Layout(props) {
  const { children } = props;
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.body}>
        <Nav />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
