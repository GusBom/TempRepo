const {readFileSync, writeFileSync} = require('fs');

const files = readFileSync('./textFolder/first.txt','utf8')

writeFileSync('./textFolder/fit.txt',
              'This is a new folder');

console.log(files)

