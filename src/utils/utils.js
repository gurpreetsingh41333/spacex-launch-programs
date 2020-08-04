export const filterYears = () => {
  const years = [];
  for (let i = 0; i < 15; i++) {
    years.push(2006 + i);
  }
  return years;
};

export const booleanText = ['True', 'False'];

export const BASE_URL = 'https://api.spaceXdata.com/v3/launches';

export const ERROR_MSG = {
  NO_RECORD: 'No records!',
};
