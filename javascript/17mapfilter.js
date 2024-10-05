Map
> Map help to iterate over the Array
> it always return same length of output as input Array
> it is use to apply logic

let myArray = [1,2,3,4,5];

myArray.map((data) => { return data *2})
[2, 4, 6, 8, 10]

a.map(()=>{})


Filter
> help to filter out the value
> it may or may not return same length of output as input
> it only return those value for which condition is true

var mydata = [9,8,5,34,87,23,12,4]
mydata.filter((data) =>  { return data >20})
[34, 87, 23]

var mydata = [9,8,5,34,87,23,12,4]
mydata.map((data) =>  { return data >20})
[false, false, false, true, true, true, false, false]
