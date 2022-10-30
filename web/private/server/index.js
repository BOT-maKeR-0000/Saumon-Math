const express = require('express');
const app = express();

const { Deta } = require('deta');

const deta = Deta(); 

const logs = deta.Base('logs');

const BigNumber = 8.64e15;

const fs = require('fs');

const path = require('path');

async function parseDirectory(relativePath, pathModifier) {
  const absolutePath = path.join(__dirname, relativePath);
  fs.readdir(absolutePath, (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        //Chek if file is a directory
        fs.stat(path.join(absolutePath, file), (err, stats) => {
            if(stats.isDirectory)
        });
    });

  })
}

parseDirectory('public/html', '/');
parseDirectory('public/css', '/css/');
parseDirectory('public/js', '/js/');
parseDirectory('public/img', '/img/');


// export 'app'
module.exports = app