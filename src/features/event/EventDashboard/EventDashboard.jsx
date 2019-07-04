import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';
import EventList from "../EventList/EventList";
import { deleteEvent } from '../eventActions'
import LoadingComponents from "../../../app/layout/LoadingComponents";

const mapState= (state) => ({
  events: state.events,
  loading: state.async.loading
}) 

const actions = {
  deleteEvent,
}

class EventDashboard extends Component {

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponents/>
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h1>Activities</h1>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
