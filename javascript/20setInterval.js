setInterval(function(){},time)
setTimeout(function(){},time)


setTimeout(function(){
    console.log("hiiii")
},3000)


function random(){
    console.log(Math.random())
}

let myNumber  = setInterval(function(){
    random()
},3000)

0.8251114798897603
VM548:2 0.19500449842810408
VM548:2 0.6782731187748745
VM548:2 0.14301678204435175
VM548:2 0.23134978954846086
VM548:2 0.6476277981125997
VM548:2 0.6097408546573266
clearInterval(myNumber)