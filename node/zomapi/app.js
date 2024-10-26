let express = require('express');
let app = express();
let port = 9110;
let {dbConnect,
    getData} = require('./controller/dbController');


app.get('/',(req,res) => {
    res.send('Hii From Express')
});


app.get('/health',(req,res) => {
    res.send('Hii From Health Route')
});

//get all city
app.get('/location',async(req,res) => {
    let query = {};
    let collection = "location"
    let output = await getData(collection,query)
    res.status(200).send(output)
})

//get all restuarants
app.get('/restaurants',async(req,res) => {
    let query = {};
    let stateId = req.query.stateId

    if(stateId){
        query = {state_id:Number(stateId)}
    }else{
        query = {}
    }

    let collection = "restaurants";
    let output = await getData(collection,query);
    res.status(200).send(output)
})

//get all mealtype
app.get('/mealType',async(req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.status(200).send(output)
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})