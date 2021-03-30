import React from 'react';
import { useLocation, history } from 'umi';
import { useDispatch, useSelector } from 'dva';
import { Menu } from 'antd';
import styles from './Nav.less';

const { SubMenu } = Menu;

function Nav() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { tabs, routes } = useSelector((state) => state.global);

  function handleMenuClick({ key }) {
    history.push(key);
    const isExit = tabs.findIndex((obj) => obj.path === key) > -1;
    if (!isExit) {
      const route = routes.find((obj) => obj.path === key);
      dispatch({ type: 'global/save', payload: { tabs: [...tabs, route] } });
    }
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
