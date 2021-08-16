import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Header from './Header';
import Nav from './Nav';
import Tab from './Tab';
import styles from './index.less';

export default function Layout() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.body}>
          <Nav />
          <Tab />
        </div>
      </div>
    </ConfigProvider>
  );
}