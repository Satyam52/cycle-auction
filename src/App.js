import "./App.css";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Caraousel from "./components/carousel";
import TopNew from "./components/topNew";
import Cycles from "./components/cycles";

const HomePage = () => (
  <>
    <Caraousel />
    <TopNew />
  </>
);

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ margin: "0 20px 0 20px" }}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/auctions">
            <Cycles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
