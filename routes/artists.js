// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

// ------------------------------
// [Get] Artists
// return array of artists
// ------------------------------
router.get('/', (req, res) => {
  //@todo: link to database
  res.json([])
})

// ------------------------------
// [Post] Artists
// return id  (id kan ook 0 zijn -> niet gelukt)
// ------------------------------
router.post('/', (req, res) => {
  //@todo: link to database
  //req.body -> om data uit een post te halen
  console.log(req.body);  
  res.send("Added artist");
})

// ------------------------------
// [Delete] Artists
// return boolean (true or false)
//
router.post('/', (req, res) => {
  //@todo: link to database
  res.send("Deleted artist");
})

// ------------------------------
// [Put] Artists
// return 
// ------------------------------
router.put('/', (req, res) => {
  //@todo: link to database
  //req.body -> om data uit een put te halen
  res.send("updated artist");
})





module.exports = router;