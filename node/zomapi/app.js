let express = require('express');
let app = express();
let port = 9110;
let {dbConnect,
    getData, postData, updateData,
    deleteData} = require('./controller/dbController');
let {ObjectId}  = require('mongodb');
let mongo = require('mongodb');
let cors = require('cors');

app.use(express.json())
app.use(cors())

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

//filters
app.get('/filter/:mealId', async(req,res)=>{
    let query = {}
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let hcost = Number(req.query.hcost);
    let lcost = Number(req.query.lcost);

    if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(hcost & lcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {
            "mealTypes.mealtype_id":mealId
        }
    }

   
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.status(200).send(output)
})

//restDetails
app.get('/details/:id',async(req,res) => {
    let id = Number(req.params.id);
    //let query = {"restaurant_id":id}
    let query = {_id:new ObjectId(req.params.id)}
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.status(200).send(output)

})

//menu wrt to restaurants
app.get('/menu/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {"restaurant_id":id}
    let collection = "menu";
    let output = await getData(collection,query);
    res.status(200).send(output)
})

app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = 'orders';
    let response = await postData(collection,data)
    res.send(response)
})

//get all city
app.get('/getOrders',async(req,res) => {
    let query = {};
    let collection = "orders"
    let output = await getData(collection,query)
    res.status(200).send(output)
})

//update order
app.put('/updateOrder',async(req,res) => {
    let collection = "orders";

    let condition = {_id:new ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let response = await updateData(collection, condition,data);
    res.send(response)
})

//delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders";
    let condition = {_id:new ObjectId(req.body._id)}
    let response = await deleteData(collection, condition);
    res.send(response)
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})