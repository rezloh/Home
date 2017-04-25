// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const path = require ('path');

const app = express();

// STATIC FILES
app.use('/public', express.static(path.join(__dirname, '../client')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap')));

// SERVE INDEX PAGE
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// CATCH 404 ERRORS
app.use((req, res, next) => {
  const err = new Error('Sorry--I couldn\'t find that!');
  err.status = 404;
  next(err);
});

// LISTEN
app.listen(3537, () => {
  console.log(`Server is listening on port 3537.`)
});
