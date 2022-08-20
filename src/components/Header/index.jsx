import React from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';
import { CURRENT_MODE, RANDOM_MODE } from '../../consts';

function Header({ mode, setMode, reload }) {
  const toggleMode = () => {
    setMode(mode === CURRENT_MODE ? RANDOM_MODE : CURRENT_MODE);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={reload}
        variant="contained"
      >
        Reload
      </Button>
      <FormControlLabel
        control={<Switch checked={mode === 'random'} onChange={toggleMode} />}
        label="Random"
      />
    </Stack>
  );
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  reload: PropTypes.func.isRequired,
};

export default Header;
