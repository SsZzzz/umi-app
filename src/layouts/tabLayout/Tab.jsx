import React from 'react';
import { history } from 'umi';
import { useDispatch, useSelector, useLocation } from 'dva';
import { Tabs } from 'antd';
import styles from './Tab.less';

const { TabPane } = Tabs;

function Tab() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { tabs, routes } = useSelector((state) => state.global);
  const route404 = routes.find((obj) => obj.path.includes('404'));
  const is404 = routes.findIndex((obj) => obj.path === pathname) === -1;

  function handleTabChange(activeKey) {
    history.push(activeKey);
  }

  function handleTabEdit(targetKey) {
    const targetIndex = tabs.findIndex((obj) => obj.path === targetKey);
    const newTabs = [...tabs]; //一定要浅拷贝,不然报错,还没明白为什么
    newTabs.splice(targetIndex, 1);
    dispatch({ type: 'global/save', payload: { tabs: newTabs } });
    if (targetKey === pathname) {
      //如果删除的tab就是active的话,就跳转到后一个tab,如果删的是最后一个tab,就跳转到第一个tab
      if (targetIndex === tabs.length - 1) history.push(newTabs[0].path);
      else history.push(newTabs[targetIndex].path);
    }
  }

  return (
    <main className={styles.main}>
      {is404 ? (
        <route404.component />
      ) : (
        <Tabs type="editable-card" activeKey={pathname} onChange={handleTabChange} onEdit={handleTabEdit} hideAdd>
          {tabs.map(({ path, title, component: Component }) => (
            <TabPane tab={title} key={path} closable={tabs.length !== 1}>
              <Component />
            </TabPane>
          ))}
        </Tabs>
      )}
    </main>
  );
}

export default Tab;
