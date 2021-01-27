import React from 'react';
import { useSelector } from 'umi';

function Home() {
  const { name } = useSelector((state) => state.demo);

  return <div>{name}</div>;
}

export default Home;
