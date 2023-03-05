import express from 'express';

const home = express.Router();

home.get('/', (req, res) => {
  res.status(200).json({ message: 'This is your home page, feel free to set up the app the way you like. Have fun!' });
});

export default home;