import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import Loader from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';

import {Cryptocurrencies, News} from "../components";

const {Title} = Typography;

const HomePage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    console.log(data);

    if(isFetching) return <Loader/>

    return (
        <>
            <Title level={2} className="heading">Criptomonedas del Mundo</Title>
            <Row>
                <Col span={12}><Statistic title="Total Criptomonedas" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Aplicaciones de Cambio" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Dinero en Criptos" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total Volumen 24h" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Mercados" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className = "home-heading-container">
                <Title level={2} className="home-title">Top 10</Title>
                <Title level={3} className="show-more"><Link to={"/cryptocurrencies"}>Mostrar Mas</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className = "home-heading-container">
                <Title level={2} className="home-title">Noticias</Title>
                <Title level={3} className="show-more"><Link to={"/news"}>Mostrar Mas</Link></Title>
            </div>
            <News simplified/>
        </>
    );
};

export default HomePage;