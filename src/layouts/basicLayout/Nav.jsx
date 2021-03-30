import React from 'react';
import { useLocation, history } from 'umi';
import { Menu } from 'antd';
import styles from './Nav.less';

const { SubMenu } = Menu;

function Nav() {
  const { pathname } = useLocation();

  function handleMenuClick({ key }) {
    history.push(key);
  }

  return (
    <nav className={styles.navContainer}>
      <Menu defaultOpenKeys={['list']} selectedKeys={[pathname]} mode="inline" onClick={handleMenuClick}>
        <Menu.Item key="/home">首页</Menu.Item>
        <SubMenu key="list" title="列表">
          <Menu.Item key="/list1">列表1</Menu.Item>
          <Menu.Item key="/list2">列表2</Menu.Item>
        </SubMenu>
      </Menu>
    </nav>
  );
}

export default Nav;
