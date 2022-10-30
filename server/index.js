const express = require('express');
const app = express();

const { Deta } = require('deta');

const deta = Deta(); 

const logs = deta.Base('logs');

const BigNumber = 8.64e15;

const fs = require('fs');


// export 'app'
module.exports = app