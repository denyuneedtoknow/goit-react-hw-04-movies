
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomeView from './Components/Views/HomeView'
import MoviesView from './Components/Views/MoviesView';
import NotFoundView from './Components/Views/NotFoundView';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <HomeView />
        </Route>
        <Route path='/MoviesSearch'>
          <MoviesView />
        </Route>
        <Route path=''>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
