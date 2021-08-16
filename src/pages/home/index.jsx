import React from 'react';
import { useSelector, useIntl, setLocale } from 'umi';
import { DatePicker, Button } from 'antd';

function Home() {
  const intl = useIntl();
  const { name } = useSelector((state) => state.demo);

  return (
    <div>
      <div>{name}</div>
      <div>
        {intl.formatMessage(
          { id: 'WELCOME_TO_UMI_WORLD' },
          {
            name: '旅行者',
          },
        )}
      </div>
      <div>
        <DatePicker />
      </div>
      <div>
        <Button type="primary" onClick={() => setLocale('zh-CN', false)}>
          中文
        </Button>
        <Button type="primary" onClick={() => setLocale('en-US', false)}>
          英文
        </Button>
      </div>
    </div>
  );
}

export default Home;
