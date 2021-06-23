import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ListPage from './ListPage'
import CreatePage from './CreatePage'
import DetailPage from './DetailPage'
import Header from './Header'


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact render={(routerProps) => <ListPage {...routerProps} />}
          />
          <Route path="/ducks/:id" exact render={(routerProps) => <DetailPage {...routerProps} />}
          />
          <Route path="/create" exact render={(routerProps) => <CreatePage {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
