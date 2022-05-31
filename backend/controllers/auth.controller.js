//to-do dcript pass and tokenization
const db = require('../db');

const signUp = async (req, res) => {
  try {
    const user = new db.User({
      username: req.body.username,
      password: req.body.password,
    });

    await user.save();
    res.send({ message: 'user registration success' });
  } catch (error) {
    console.error('unhandled error: ', error); 
    res.status(500).send({ message: error });
  }
};

const signIn = async (req, res) => {
  try {
    const user = await db.User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({ message: 'not found' });
    } 

    const isPasswordValid  =  req.body.password == user.password;

    if (!isPasswordValid) {
      return res.status(401).send({
        message: 'unable to authenticate',
      });
    }

    res.status(200).send({
      id: user._id,
      username: user.username
    });
  } catch (error) {
    console.error('unhandled error: ', error);
    res.status(500).send({ message: error });
  }
};

module.exports = { signUp, signIn };
