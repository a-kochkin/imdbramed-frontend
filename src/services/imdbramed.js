const API_URI = 'https://imdbramed-api.herokuapp.com/tvSeries';

export const current = async () => {
  try {
    const currentTvSeries = await fetch(`${API_URI}/current`, { method: 'POST' });

    return currentTvSeries.json();
  } catch (error) {
    console.error('Error while v current tv series', error);

    return {};
  }
};

export const random = async () => {
  try {
    const randomTvSeries = await fetch(`${API_URI}/random`, { method: 'POST' });

    return randomTvSeries.json();
  } catch (error) {
    console.error('Error while v random tv series', error);

    return {};
  }
};

export const list = async (inputValue) => {
  if (inputValue.length < 3) {
    return [];
  }

  try {
    const tvSeriesList = await fetch(`${API_URI}/query/${inputValue}`, { method: 'GET' });

    const tvSeriesListJson = await tvSeriesList.json();

    return tvSeriesListJson.map(({
      tconst,
      russianTitle,
      englishTitle,
      startYear,
    }) => (
      { value: tconst, label: `${russianTitle} / ${englishTitle} (${startYear})` }
    ));
  } catch (error) {
    console.error('Error while fetching tv series list', error);

    return [];
  }
};
