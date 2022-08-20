import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';

function Frame({ src }) {
  return (
    <Grid
      justifyContent="center"
      sx={{
        width: '100%',
        height: '50vh',
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
      />
    </Grid>
  );
}

Frame.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Frame;
