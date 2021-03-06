const cool = require('cool-ascii-faces');
const express = require('express'),
      bodyParser = require("body-parser");

const path = require('path')
const PORT = process.env.PORT || 5000
const ENVIRONMENT = process.env.ENVIRONMENT


const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist')))
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/api/users', (req, res) => {
    console.log('api/users called!!!!!!!')
    res.json([{ name : "Brijesh", pipline : 1 , role : "Dev", random : ~~(Math.random() * 100), development : "Auto Deploy", ENVIRONMENT : ENVIRONMENT }]);
  })

  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
  .get('/cool', (req, res) => res.send(cool()))

  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
