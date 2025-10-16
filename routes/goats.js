const express = require('express');
const router = express.Router();

const goats = [
  {
  id: 1,
  name: "T-rex"
},
{
  id: 2,
  name: "Connie"
},
{
  id: 3,
  name: "clyde"
},
] 

router.get('/', (req, res) => {
  res.json(goats)
})

router.get('/:id', (req, res) => {
  let selectedGoat = null;
  goats.forEach((goat) =>
  {
    if (goat.id == req.params.id)
      {
        selectedGoat = goat;
      };  
  });

  res.json(selectedGoat);
})


router.post('/', (req, res) => {
  console.log(req.body);  
  res.send("Added goat");
})

router.post('/', (req, res) => {
  res.send("Deleted goat");
})

module.exports = router;