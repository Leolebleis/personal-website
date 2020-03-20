import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { NoMatch } from "./components/no-match/NoMatch";
import { Contact } from "./components/contact/Contact";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { JumbotronComponent } from "./components/JumbotronComponent";

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppState) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <JumbotronComponent />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

interface IAppProps {}

interface IAppState {
  name: string;
}

export default App;
