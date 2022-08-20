import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function History({ tvSeries, lastGuess }) {
  const {
    tconst,
    russianTitle,
    englishTitle,
    startYear,
  } = tvSeries;

  if (lastGuess?.value === tconst) {
    return (
      <Typography>
        You got it!
      </Typography>
    );
  }

  return (
    <Typography>
      {`The answer was: ${russianTitle} / ${englishTitle} (${startYear})`}
    </Typography>
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
  lastGuess: PropTypes
    .shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
};

History.defaultProps = {
  lastGuess: null,
};

export default History;
