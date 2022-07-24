import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;


const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery(100);
  const [currentCoin, setCurrentCoin] = useState('Qwsogvtv82FCd')

  if (isFetching) return <Loader />;

  
  console.log(data);

  return (
    <>
      <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setCurrentCoin(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
      </Select>
    </>
  );
};

export default Exchanges;
