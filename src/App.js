import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="Bookstore-CMS">
            <MainPage />
          </div>
        </Route>
        <Route path="/categories">
          <div className="Bookstore-CMS">
            <SecondPage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
