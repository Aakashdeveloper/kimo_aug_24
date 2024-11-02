// Page 1
> List of city
* http://localhost:9110/location
> List of Restaurant
* http://localhost:9110/restaurants

> Rest wrt city
> list of quick search
* http://localhost:9110/mealType


//Page2
> Rest wrt meal
* http://localhost:9110/filter/1
> Rest wrt meal + cuisine
* http://localhost:9110/filter/1?cuisineId=1
> Rest wrt meal + cost
* http://localhost:9110/filter/1?hcost=1500&lcost=500

//page3
> Details of restaurants
* http://localhost:9110/details/4
> Menu of restaurants
* http://localhost:9110/menu/4

//page4
> Place order
* http://localhost:9110/placeOrder (POST)

{
        "orderId": 3,
        "name": "Nikita",
        "email": "nikki@gmail.com",
        "address": "Hom 65",
        "phone": 8934645457,
        "cost": 982,
        "menuItem": [
           78,34,12
        ],
        "status": "Pending"
    }

//page5
> list oll order
* http://localhost:9110/getOrders (GET)

> update order
> delete order

