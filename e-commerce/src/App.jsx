import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const notify = () => toast("Bildirim!");

// notify() fonksiyonunu bir olayda çağırabilirsiniz.


const fetchData = async () => {
  const response = await axios.get('https://api.example.com/data');
  console.log(response.data);
};

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <h1>Anasayfa</h1>
        </Route>
        <Route path="/hakkimizda">
          <h1>Hakkımızda</h1>
        </Route>
        {/* Diğer route'lar burada */}
      </Switch>
    </Router>
  );
}

export default App;
