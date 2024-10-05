> iterate over the array and can also generate the series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


let a = ['Boston', 'Delhi', 'Innsburg', 'Mumbai', 'Amsterdam']
for(i=0;i<a.length;i++){
    console.log(a[i])
}

Boston
Delhi
Innsburg
Mumbai
Amsterdam

///
var i = 10
while(i<5){
    console.log(i);
    i++
}

///
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)

////
let city = ['Boston', 'Delhi', 'Innsburg', 'Mumbai', 'Amsterdam']
for(mycity of city){
    console.log(mycity)
}