const express = require('express');
const router = express.Router();

// GET api listing.
// routes all get and post of the app 
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;