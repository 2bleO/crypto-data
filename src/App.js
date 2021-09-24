import { Navbar } from 'react-bootstrap';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import Details from './components/Details';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <Navbar className="px-4 text-white bg-blue-dark d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            &#60; HOME
          </Link>
          <h3 className="m-0">Crypto Stats</h3>
          <span>
            <FontAwesomeIcon icon={faMicrophone} className="me-4" />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer>
        <a className="text-white justify-content-center" href="https://nomics.com">Crypto Market Cap & Pricing Data Provided By Nomics</a>
      </footer>
    </>
  );
}

export default App;
