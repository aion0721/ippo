import React from 'react';
import { snapshot } from 'test/helpers';
import ConnpassEvents from '.';

const event = i => ({
  event_id: i,
  title: `イベントのタイトル${i}`,
  event_url: 'https://connpass.com/',
  catch: 'イベントの説明です',
  place: '東京都千代田区丸の内',
  started_at: '2012-04-17T18:30:00+09:00',
});

const connpass = {
  events: [...new Array(10)].map((_, i) => event(i)),
  results_available: 100,
  results_start: 11,
};

const props = ({ loading = false, connpass = null }) => ({
  data: {
    loading,
    connpass,
    refetch: jest.fn(),
  },
  subscribe: jest.fn(),
});

snapshot('ConnpassEvents/nomal', <ConnpassEvents {...props({ connpass })} />);

snapshot('ConnpassEvents/loading', <ConnpassEvents {...props({ loading: true })} />);

snapshot('ConnpassEvents/nocontents', <ConnpassEvents {...props({})} />);
