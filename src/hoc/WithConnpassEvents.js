import { compose, graphql } from 'react-apollo';
import query from 'src/graphql/query';
import ConnpassEvents from 'src/components/pages/ConnpassEvents/';
import paging from 'src/constants/paging';

export default compose(
  graphql(query.connpassEvents, {
    options: props => ({ variables: { page: 1, count: paging.eventsPerPage } }),
  }),
  graphql(query.registerNotification, { name: 'registerNotification' }),
)(ConnpassEvents);
