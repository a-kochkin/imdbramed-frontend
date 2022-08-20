import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';

function Pagination({
  framesNumbers,
  setFrameNumber,
  currentFrameNumber,
  totalGuesses,
}) {
  return (
    <Stack direction="row" spacing={2}>
      {
        framesNumbers.map((number) => (
          <Button
            key={number}
            variant={currentFrameNumber === number ? 'outlined' : 'contained'}
            onClick={() => setFrameNumber(number)}
            disabled={number > totalGuesses}
            sx={{ minWidth: 'unset' }}
          >
            {number}
          </Button>
        ))
      }
    </Stack>
  );
}

Pagination.propTypes = {
  framesNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  setFrameNumber: PropTypes.func.isRequired,
  currentFrameNumber: PropTypes.number.isRequired,
  totalGuesses: PropTypes.number.isRequired,
};

export default Pagination;
