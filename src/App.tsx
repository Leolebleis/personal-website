import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Repos from "./components/Repos";
import { Footer } from "./components/Footer";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import ScrollableAnchor from "react-scrollable-anchor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import { BackgroundImage } from "./components/BackgroundImage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundImage />
        <Container>
          <ScrollableAnchor id={"home"}>
            <div />
          </ScrollableAnchor>

          <NavigationBar />
        </Container>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              
              <ScrollableAnchor id={"about"}>
                <About />
              </ScrollableAnchor>
              {/* API Rate limit */}
              <ScrollableAnchor id={"projects"}>
                <div className="bg-light p-2">
                  <Repos />
                </div>
              </ScrollableAnchor>
              <ScrollableAnchor id={"contact"}>
                <Contact />
              </ScrollableAnchor>
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
