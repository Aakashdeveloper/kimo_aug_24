if(condition){
    // if condition is true
}else{
    // if condition is false
}

if(condition){
    // if condition is true
}else if(condition){
    // 
}else{
    // if condition is false
}

let a= 10;
if(a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
10 is even

let a= 11;
if(a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
11 is odd


let a= 9;
if(a%2 == 0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}else{
    console.log(`${a} is odd`)
}
Number 9 is divisble by 3

//single line if else
(ternary)
let a = 10
a>10?"Hii":"Biee"
'Biee'

let a = 11
a>10?"Hii":"Biee"
'Hii'


let a = 10
a>10?a+1:a-1
9

let a = 11
a>10?a+1:a-1
12