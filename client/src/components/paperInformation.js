import React from 'react';
import CardTravelIcon from 'material-ui-icons/CardTravel';
import FlightTakeoffIcon from 'material-ui-icons/FlightTakeoff';
import HotelIcon from 'material-ui-icons/Hotel';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';

export default [
  {
    Icon: () => <CardTravelIcon className="Landing-paperIcons-4" />,
    description:
      'Generate potential destinations in order to discover exciting and interesting places you may have otherwise never found.'
  },
  {
    Icon: () => <FlightTakeoffIcon className="Landing-paperIcons-4" />,
    description:
      'Discover some flights from your chosen airport to see availability and price information to a specific location.'
  },
  {
    Icon: () => <HotelIcon className="Landing-paperIcons-4" />,
    description:
      'Find popular, nearby hotels with their ratings, along with reviews from customers and detailed information thanks to Yelp.'
  },
  {
    Icon: () => <FavoriteBorderIcon className="Landing-paperIcons-4" />,
    description:
      'Make an account with us in order to keep track of the most tempting destinations you find and check them out later.'
  }
];
