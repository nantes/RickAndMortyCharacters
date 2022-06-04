const router = require('express').Router();

const { signIn, signUp } = require('./controllers/auth.controller');
const { getCharacters } = require('./controllers/characters.controller');
const { addFavouriteCharacter, removeFavouriteCharacter } = require('./controllers/favouritesController')

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/get-characters', getCharacters);
router.put('/add-favourite-character/:charId', addFavouriteCharacter);
router.put('/remove-favourite-character/:charId', removeFavouriteCharacter);

module.exports = router;
