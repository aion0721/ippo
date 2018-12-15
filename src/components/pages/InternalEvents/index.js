import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Spinner, Text } from '@blueprintjs/core';
import NavigationBar from 'src/components/molecules/NavigationBar';
import EventCard from 'src/components/organisms/EventCard';
import dateFormat from 'src/utils/dateFormat';

const Container = styled.div`
  padding: 10px 15px;
`;

const EventCardContainer = styled.div`
  margin: 8px 0;
`;

const InternalEvents = ({ data: { loading, events } }) => {
  return (
    <>
      <NavigationBar appName="IPPO" />
      <Container>
        {loading ? (
          <Spinner />
        ) : events ? (
          <>
            {events.map(event => (
              <EventCardContainer key={event.id}>
                <EventCard
                  title={event.title}
                  eventUrl=""
                  catchMessage={event.catchMessage}
                  place={event.place}
                  datetime={event.startedAt && dateFormat.startDatetimeJa(event.startedAt)}
                  interactive
                />
              </EventCardContainer>
            ))}
          </>
        ) : (
          <Text>No Contents</Text>
        )}
      </Container>
    </>
  );
};

InternalEvents.displayName = 'InternalEvents';

InternalEvents.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool.isRequired,
    events: propTypes.arrayOf(
      propTypes.shape({
        title: propTypes.string,
        catchMessage: propTypes.string,
        place: propTypes.string,
        startedAt: propTypes.string,
      }),
    ),
  }),
};

InternalEvents.defaultProps = {
  data: {
    loading: false,
    events: [],
  },
};

export default InternalEvents;
