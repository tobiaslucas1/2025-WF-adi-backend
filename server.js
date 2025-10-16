// import from node_modules
const  express = require ('express')

// functie.express() in een variabele zetten
//daarna extra settings toevoegen
const app = express();
app.use(express.json());

console.log("Api is running!")

//endpoints
const artistsRouter = require('./routes/artists');
const countriesRouter = require('./routes/countries');
const goatsRouter = require('./routes/goats');
const rankingRouter = require('./routes/ranking');
const songsRouter = require('./routes/songs');
const votesRouter = require('./routes/votes');


app.use('/artists', artistsRouter)
app.use('/countries', countriesRouter)
app.use('/goats', goatsRouter);
app.use('/ranking', rankingRouter);
app.use('/songs', songsRouter);
app.use('/votes', votesRouter);

app.listen(3000)