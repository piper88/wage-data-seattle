'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
const debug= require('debug')('wage-data-seattle:server');

app.use(express.static(`${__dirname}/build`));

const server = module.exports = app.listen(PORT, () => {
  //not working
  debug(`server up on ${PORT}`);
  //working
  console.log(`server up on ${PORT}`);
});

server.isRunning = true;
