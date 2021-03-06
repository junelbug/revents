import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponents />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
