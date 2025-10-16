// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();


// ------------------------------
// [Post] votes
// return id  (id kan ook 0 zijn -> niet gelukt)
// ------------------------------
router.post('/', (req, res) => {
  //@todo: link to database
  //req.body -> om data uit een post te halen
  console.log(req.body);  
  res.send("Added vote");
})




module.exports = router;