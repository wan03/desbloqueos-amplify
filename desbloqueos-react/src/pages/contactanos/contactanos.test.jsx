import React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';
import {
  it, afterEach, describe,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@jest/globals';

import Contactanos from './Contactanos';

describe('Contactanos', () => {
  afterEach(() => cleanup());

  it('renders with or without content', () => {
    render(<Contactanos />);
  });
});
