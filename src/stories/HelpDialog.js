import React from 'react';
import { storiesOf } from '@storybook/react';
import HelpDialog from '../components/HelpDialog/HelpDialog';

storiesOf('HelpDialog', module).add('example', () => (
  <HelpDialog open={true} />
));
