import React from 'react';
import { storiesOf } from '@storybook/react';
import UploadDialog from '../components/UploadDialog/UploadDialog';

storiesOf('UploadDialog', module).add('example', () => (
  <UploadDialog open={true} />
));
