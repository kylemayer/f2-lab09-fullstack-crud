import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import ListPage from './ListPage'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact render={(routerProps) => <ListPage {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
