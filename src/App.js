import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import { FeedPage } from "./components/FeedPage";
import { HomePage } from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/profile">To Profile</Link>
          </li>
          <li>
            <Link to="/feed">To Feed</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/feed" component={FeedPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
