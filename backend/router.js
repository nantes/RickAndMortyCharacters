const router = require('express').Router();

const { signIn, signUp } = require('./controllers/auth.controller');
const { getCharacters } = require('./controllers/characters.controller');

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/get-characters', getCharacters);

module.exports = router;
