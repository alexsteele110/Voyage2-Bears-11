import React from 'react';
import { connect } from 'react-redux';

import { fetchFlights } from '../actions/flightActions';
import Button from 'material-ui/Button';

class FlightsList extends React.Component {
  componentWillMount() {
    // fetch flights
    this.props.fetchFlights('SFO', 'LAX', '2017-11-30');
  }

  // render flight and button to page
  render() {
    console.log(this.props.flights);
    return (
      <div>
        <h3>Flights as low as</h3>
        {this.props.flights.map(flight => (
          <div key={flight.data.flights.trips.requestId}>
            <p>{flight.data.flights.trips.tripOption['0'].saleTotal}</p>
          </div>
        ))}
        <Button
          href="https://www.google.com/flights/#search;f=LAS;t=SFO;d=2017-11-30"
          target="_blank"
        >
          Book Flights Now
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    flights: state.flights
  };
};

export default connect(mapStateToProps, { fetchFlights })(FlightsList);
