import { getData } from '@/lib/getData';
import React, { ReactElement } from 'react';

interface GetSomeDataProps {
  Component: (props: any) => ReactElement;
  url: () => string;
}

const GetSomeData = async ({ Component, url }: GetSomeDataProps) => {
  const data = await getData(url());
  return <Component data={data} />;
};

export default GetSomeData;
