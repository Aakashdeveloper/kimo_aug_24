let express = require('express');
let app = express();
let port = 9110;


app.get('/',(req,res) => {
    res.send('Hii From Express')
});


app.get('/health',(req,res) => {
    res.send('Hii From Health Route')
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})