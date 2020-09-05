const fs=require('fs');
fs.writeFileSync('1.txt','hello world to all');
fs.appendFileSync('1.txt','appending the another string');