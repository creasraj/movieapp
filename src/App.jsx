import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import MovieDetails from "./components/MovieDetails";
import SearchControl from "./components/SearchControl";
import AppErrorBoundary from "./components/AppErrorBoundary";

const App = () => (
    <AppErrorBoundary>
      <Router>
          <SearchControl />
          <Route exact path="/" component={Main} />
          <Route path="/movie/:id" component={MovieDetails} />
      </Router>
    </AppErrorBoundary>
)

export default App;
