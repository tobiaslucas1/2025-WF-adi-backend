// import from node_modules
const  express = require ('express')

// functie.express() in een variabele zetten
//daarna extra settings toevoegen
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Tobias!')
})

console.log("Api is running!")

app.listen(3000)