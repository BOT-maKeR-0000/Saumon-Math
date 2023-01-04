const express = require('express');
const app = express();

const axios = require('axios');

function log(data) {
   axios.post('https://gaskam.studio/', data).then((res) => {
      console.log(`Successfull request. Response: ${JSON.stringify(res.data)}`);
   }).catch((err) => {
      console.log(err);
   });
}

const { Deta } = require('deta');

const deta = Deta();

const BigNumber = 8.64e15;

const fs = require('fs');

const path = require('path');

async function parseDirectory(relativePath, pathModifier) {
   const absolutePath = path.join(__dirname, relativePath);
   fs.readdir(absolutePath, (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
         //Chek if file is a directory
         fs.stat(path.join(absolutePath, file), (err, stats) => {
            if (stats.isDirectory()) return parseDirectory(path.join(relativePath, file), pathModifier + file + '/');
            if (file == "index.html") {
               return app.get(pathModifier, (req, res) => {
                  res.type(path.extname(file));
                  res.sendFile(path.join(absolutePath, file));
               });
            }
            app.get(pathModifier + file, (req, res) => {
               res.type(path.extname(file));
               res.sendFile(path.join(absolutePath, file));
            });
         });
      });

   })
}


parseDirectory('web/public/html', '/');
parseDirectory('web/public/css', '/css/');
parseDirectory('web/public/js', '/js/');
parseDirectory('web/public/img', '/img/');

//app.listen(80);
// export 'app'
module.exports = app