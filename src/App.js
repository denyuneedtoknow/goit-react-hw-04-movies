
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomeView from './Components/Views/HomeView'
import GetMovies from './Services/GetMovies'

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeView />
    </div>
  );
}

export default App;
