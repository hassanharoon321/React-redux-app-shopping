import './App.css';
import Header from './Containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 Page Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
