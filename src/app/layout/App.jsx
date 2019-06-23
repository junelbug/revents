import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Re-vents</h1>
        <Fragment>
          <NavBar/>
          <Container className="main">            
            <EventDashboard/>
          </Container>

        </Fragment>
        
        
      </div>
    );
  }
}

export default App;
