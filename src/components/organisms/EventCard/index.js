import React from 'react';
import propTypes from 'prop-types';
import { Card, Elevation, Text } from '@blueprintjs/core';

const onClick = url => window.open(url, '_blank');

const EventCard = ({ title, eventUrl, catchMessage, place, datetime, interactive }) => (
  <Card interactive={interactive} onClick={() => onClick(eventUrl)} elevation={Elevation.TWO}>
    <h3 className="bp3-heading">{title}</h3>
    {catchMessage && <Text>{`概要：${catchMessage}`}</Text>}
    {place && <Text>{`場所：${place}`}</Text>}
    {datetime && <Text>{`日時：${datetime}`}</Text>}
  </Card>
);

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
  title: propTypes.string.isRequired,
  eventUrl: propTypes.string.isRequired,
  catchMessage: propTypes.string,
  place: propTypes.string,
  datetime: propTypes.string,
  interactive: propTypes.bool,
};

EventCard.defaultProps = {
  catchMessage: '',
  place: '',
  datetime: '',
  interactive: true,
};

export default EventCard;
