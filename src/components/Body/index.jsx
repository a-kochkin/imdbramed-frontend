import React, { useEffect, useState } from 'react';
import { Container, Stack } from '@mui/material';
import Header from '../Header';
import Frame from '../Frame';
import Pagination from '../Pagination';
import Guess from '../Guess';
import History from '../History';
import Answer from '../Answer';
import { CURRENT_MODE, RANDOM_MODE, MAX_GUESSES } from '../../consts';
import { current, random, list } from '../../services/imdbramed';

function Body() {
  const [mode, setMode] = useState(CURRENT_MODE);
  const [tvSeries, setTVSeries] = useState({});
  const [frameNumber, setFrameNumber] = useState(1);
  const [totalGuesses, setTotalGuesses] = useState(1);
  const [selected, setSelected] = useState(null);
  const [guesses, setGuesses] = useState([]);

  const clear = () => {
    setFrameNumber(1);
    setTotalGuesses(1);
    setSelected(null);
    setTVSeries({});
    setGuesses([]);
  };

  const fetchData = async () => {
    clear();

    let response;

    switch (mode) {
      case CURRENT_MODE:
        response = await current();
        break;
      case RANDOM_MODE:
        response = await random();
        break;
      default:
        break;
    }

    setTVSeries(response);
  };

  const guess = () => {
    if (totalGuesses > MAX_GUESSES) {
      return;
    }

    const { value } = selected ?? {};
    const { tconst } = tvSeries;

    if (value === tconst) {
      setTotalGuesses(MAX_GUESSES + 1);
    } else if (totalGuesses === MAX_GUESSES) {
      setTotalGuesses(MAX_GUESSES + 1);
    } else {
      setTotalGuesses(totalGuesses + 1);
      setFrameNumber(totalGuesses + 1);
    }

    setGuesses([...guesses, selected]);
    setSelected(null);
  };

  useEffect(
    () => {
      fetchData();
    },
    [mode],
  );

  return (
    <Container>
      <Stack direction="column" alignItems="center" spacing={3}>
        <Header
          mode={mode}
          setMode={setMode}
          reload={fetchData}
        />
        <Frame src={tvSeries.frames?.[frameNumber - 1] ?? ''} />
        <Pagination
          totalGuesses={totalGuesses}
          setFrameNumber={setFrameNumber}
          framesNumbers={[1, 2, 3, 4, 5, 6]}
          currentFrameNumber={frameNumber}
        />
        <Guess
          onChange={setSelected}
          guess={guess}
          value={selected}
          loadOptions={list}
        />
        {
          totalGuesses > MAX_GUESSES && (
            <Answer
              tvSeries={tvSeries}
              lastGuess={guesses.at(-1)}
            />
          )
        }
        <History
          tvSeries={tvSeries}
          history={guesses}
        />
      </Stack>
    </Container>
  );
}

export default Body;
