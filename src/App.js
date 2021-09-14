import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import About from "./component/About/About";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  );
}

export default App;
