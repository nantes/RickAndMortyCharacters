const getCharacters = async ({res}) => {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url, {
      method: 'GET',
    });
    const characters = await response.json();
    res.status(200).send(characters.results);
  } catch (error) {
    console.error('unhandled error: ', error); 
    res.status(500).send({ message: error });
  }
};

module.exports = { getCharacters };
