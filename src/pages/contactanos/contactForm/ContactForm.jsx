/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box } from '@mui/material';

function ContactForm() {
  return (
    <Box sx={{ maxWidth: '100%', maxHeight: '100vh', overflow: 'hidden' }}>
      <iframe
        width="640px"
        height="480px"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=2tPEYUveFUyW8MI5jEMigEdxyTqSXJxIjIHa9CKx8JJURENLSzVXN0ZCTlU4TFhWSlVKUzNXWjlQUy4u&embed=true"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        msAllowFullScreen
      />
    </Box>
  );
}

export default ContactForm;
