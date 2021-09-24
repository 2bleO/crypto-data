import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter';
import BlueBTC from './BlueBTC.png';

export default function Home() {
  const [filter, setFilter] = useState('');
  const coins = useSelector((state) => state);

  return (
    <div className="pt-3 bg-blue-light">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={BlueBTC}
            alt="cryptocurrency"
            height="150px"
          />
        </Col>
        <Col xs={6} sm={6} md={6} className="p-0 text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold m-0">COINS</h1>
          <p>
            {Number(coins.length).toLocaleString()}
            {' '}
            Total Coins
          </p>
        </Col>
      </Row>
      <Row className="pt-3 m-0 mt-4 bg-blue-dark" style={{ cursor: 'pointer' }}>
        <Row>
          <Col xs={12} sm={12} md={2}>
            <h6 className="text-white fw-bold m-0 p-2 d-inline-block">STATS BY COIN</h6>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Filter setFilter={setFilter} />
          </Col>
        </Row>
        { coins
          .filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()))
          .map((coin, index) => (
            <LinkContainer key={coin.id} to={`/details/${coin.id}`}>
              <Col
                xs={6}
                sm={6}
                md={3}
                className={`
                d-flex flex-column justify-content-between
                align-items-end
                ${([1, 0, 0, 1][index % 4]) ? 'bg-blue-dark' : 'bg-blue-light'}
              `}
              >
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white mt-1 mb-4 h5" />
                <span
                  className="d-flex flex-column align-items-end text-white mt-4"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={coin.logo_url}
                    alt={coin.currency}
                    height="50px"
                  />
                  <h5 className="d-inline-block m-0 text-end fw-bold">{coin.name.toUpperCase()}</h5>
                  <p>
                    {' '}
                    $
                    {
                    Number(coin.price).toLocaleString()
                  }
                  </p>
                </span>
              </Col>
            </LinkContainer>
          ))}
      </Row>
    </div>
  );
}
