import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  it, afterEach, describe,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@jest/globals';

import Input from './Input';

describe('Option', () => {
  afterEach(cleanup());
  it('Renders without crashing', () => {
    render(<Input />);
  });
});
