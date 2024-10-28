import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import PageContent from './layout/PageContent';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/product/:productId" component={ProductDetailPage} />
          <Route path="/contact" exact component={ContactPage} />
          {/* Diğer sayfalar buraya eklenebilir */}
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;