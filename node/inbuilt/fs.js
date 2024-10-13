var fs = require('fs');

// fs.writeFile('myfile.txt','NodeJs Api code', () => {
//     console.log('File Created')
// })

// fs.appendFile('mycode.txt','This is line number 1 \n',() => {
//     console.log('File Appended')
// })

// fs.readFile('mycode.txt','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('mycode.txt','mycode1.txt',(err) => {
//     if(err) throw err;
//     console.log('file Renamed')
// })

fs.unlink('mycode1.txt',(err) => {
    if(err) throw err;
    console.log('file deleted')
})