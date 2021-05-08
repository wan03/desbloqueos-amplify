import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  it, afterEach, describe,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@jest/globals';

import Select from './Select';

describe('Select', () => {
  afterEach(cleanup());
  it('Renders without crashing', () => {
    render(<Select />);
  });
});
