const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchCoin = () => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
);

export default fetchCoin;
