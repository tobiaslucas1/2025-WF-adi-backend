// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

// ------------------------------
// [Get] countries
// return array of countries
// ------------------------------
router.get('/', (req, res) => {
  //@todo: link to database
  res.json([])
})






module.exports = router;