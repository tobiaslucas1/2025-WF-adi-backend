// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

// ------------------------------
// [Get] Songs
// return array of songs
// ------------------------------
router.get('/', (req, res) => {
  //@todo: link to database
  res.json([])
})

// ------------------------------
// [Post] Songs
// return id  (id kan ook 0 zijn -> niet gelukt)
// ------------------------------
router.post('/', (req, res) => {
  //@todo: link to database
  //req.body -> om data uit een post te halen
  console.log(req.body);  
  res.send("Added song");
})

// ------------------------------
// [Delete] Songs
// return boolean (true or false)
//
router.post('/', (req, res) => {
  //@todo: link to database
  res.send("Deleted song");
})

// ------------------------------
// [Put] Songs
// return 
// ------------------------------
router.put('/', (req, res) => {
  //@todo: link to database
  //req.body -> om data uit een put te halen
  res.send("updated song");
})





module.exports = router;