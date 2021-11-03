import { lazy, Suspense } from "react";
import { Route, Switch, } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() => import("./Components/Views/HomeView" /*webpackChunkName: "HomeView"*/));
const MoviesView = lazy(() => import("./Components/Views/MoviesView" /*webpackChunkName: "MoviesView"*/));
const NotFoundView = lazy(() => import("./Components/Views/NotFoundView" /*webpackChunkName: "NotFoundView"*/));
const MovieDetailsPage = lazy(() => import("./Components/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage"*/));



function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div className='loader'>
        <Loader type="TailSpin" color="#00BFFF" height={120} width={120} />
      </div>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/Movies" exact>
            <MoviesView />
          </Route>
          <Route path="/Movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/goit-react-hw-04-movies" exact>
            <HomeView />
          </Route>
          <Route path="">
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
