import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

function History({ tvSeries, history }) {
  return (
    <Stack spacing={1} alignItems="center">
      {
        history.map((item, index) => (
          <Typography
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={{ color: item?.value === tvSeries.tconst ? 'success.dark' : 'error.dark' }}
          >
            {`${item?.label ?? 'Skipped'}`}
          </Typography>
        ))
      }
    </Stack>
  );
}

History.propTypes = {
  tvSeries: PropTypes
    .shape({
      tconst: PropTypes.string,
      russianTitle: PropTypes.string,
      englishTitle: PropTypes.string,
      startYear: PropTypes.string,
    })
    .isRequired,
  history: PropTypes.arrayOf(
    PropTypes
      .shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
  )
    .isRequired,
};

export default History;
