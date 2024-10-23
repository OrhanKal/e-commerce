import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import PageContent from './layout/PageContent';

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* Diğer sayfalar buraya eklenebilir */}
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;