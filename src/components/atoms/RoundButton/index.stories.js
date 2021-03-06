import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RoundButton from '.';

const stories = storiesOf('atoms/RoundButton', module);

stories.add('通常パターン', () => (
  <RoundButton icon={text('icon', 'notifications')} onClick={action('onClick')} />
));

stories.add('大きめ', () => (
  <RoundButton icon={text('icon', 'notifications')} onClick={action('onClick')} large />
));

stories.add('特大', () => (
  <RoundButton icon={text('icon', 'notifications')} onClick={action('onClick')} xlarge />
));
