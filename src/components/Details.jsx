import { Row, Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
  const params = useParams();
  const { id } = params;
  const coins = useSelector((state) => state);
  const coin = coins.find((coin) => coin.id === id);

  return (
    <div className="pt-3 bg-blue-light">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={coin.logo_url}
            alt="logo"
            height="150px"
          />
        </Col>
        <Col
          xs={6}
          sm={6}
          md={6}
          className="p-0 text-white d-flex flex-column justify-content-center align-items-end pe-4"
        >
          <h1 className="fw-bold m-0">{coin ? coin.name.toUpperCase() : 'Loading...'}</h1>
          <p>
            {' '}
            $
            {coin ? Number(coin.price).toLocaleString() : '0'}
          </p>
        </Col>
      </Row>
      <Row className="m-0 mt-4 bg-blue-dark">
        <h6 className="text-white fw-bold p-2 m-0">
          {`${coin.name.toUpperCase()} STATS`}
        </h6>
      </Row>
      <Table striped>
        <tbody>
          <tr className="text-white bg-blue-light">
            <td>Price</td>
            <td>
              $
              {coin.price}
            </td>
          </tr>
          <tr className="text-white bg-blue-dark">
            <td>Market Cap</td>
            <td>
              $
              {coin.market_cap}
            </td>
          </tr>
          <tr className="text-white bg-blue-light">
            <td>Circulating Supply</td>
            <td>
              {coin.circulating_supply}
              {coin.currency}
            </td>
          </tr>
          <tr className="text-white bg-blue-dark">
            <td>Max Supply</td>
            <td>
              {coin.max_supply}
              {coin.currency}
            </td>
          </tr>
          <tr className="text-white bg-blue-light">
            <td>1 Day Volume</td>
            <td>
              $
              {coin['1d'].volume}
            </td>
          </tr>
          <tr className="text-white bg-blue-dark">
            <td>30 Days Volume</td>
            <td>
              $
              {coin['30d'].volume}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
