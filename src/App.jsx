import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
