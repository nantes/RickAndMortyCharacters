const db = require('../db');

const addFavouriteCharacter = async (req, res) => {
  try {
    const { charId } = req.params;
    // to-do remove hardcoded code to proper propagation id
    const userId = "629b7ffdfb0c4ae67fd8d7c2"
    const user = await db.User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { favIdCharacters: charId } },
      { new: true },
    );
    res.status(200).send({ favIdCharacters: user.favIdCharacters, username: user.username });
  } catch (error) {
    console.error('unhandled error: ', error); 
    res.status(500).send({ message: error });
  }
};

const removeFavouriteCharacter = async (req, res) => {
  try {
    const { charId } = req.params;
    // to-do remove hardcoded code to proper propagation id
    const userId = "629b7ffdfb0c4ae67fd8d7c2"

    const user = await db.User.findOneAndUpdate(
      { _id: userId },
      { $pull: { favIdCharacters: charId } },
      { new: true },
    );
    res.status(200).send({ favIdCharacters: user.favIdCharacters, username: user.username });
  } catch (error) {
    console.error('unhandled error: ', error); 
    res.status(500).send({ message: error });
  }
};

module.exports = { addFavouriteCharacter, removeFavouriteCharacter };
