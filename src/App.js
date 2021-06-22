import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import ListPage from './ListPage'
import CreatePage from './CreatePage'


function App() {
  return (
    <Router>
      <div className="main">
          <h3>Duck encyclopedia</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/create">Add a duck</Link></p>
        <Switch>
          <Route path="/" exact render={(routerProps) => <ListPage {...routerProps} />}
          />
          <Route path="/create" exact render={(routerProps) => <CreatePage {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
