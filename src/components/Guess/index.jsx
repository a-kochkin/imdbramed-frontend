import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { Stack, Box, Button } from '@mui/material';

function Guess({
  loadOptions,
  guess,
  value,
  onChange,
}) {
  return (
    <Stack direction="row" spacing={2} width="70%">
      <Box width="100%">
        <AsyncSelect
          value={value}
          onChange={onChange}
          chacheOptions
          loadOptions={loadOptions}
          styles={{
            option: (provided) => ({
              ...provided,
              color: '#333',
            }),
          }}
        />
      </Box>
      <Button
        onClick={guess}
        variant="contained"
        color="success"
      >
        Guess
      </Button>
    </Stack>
  );
}

Guess.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  guess: PropTypes.func.isRequired,
  value: PropTypes
    .shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  onChange: PropTypes.func.isRequired,
};

Guess.defaultProps = {
  value: null,
};

export default Guess;
