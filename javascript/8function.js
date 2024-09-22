var a = 10
var b = 20
a+b
30

keyword functionname(parameter){
    return
}

function add(a,b){
    return a+b
}

add(4,5)
9
add(3,88)
91
add('Hii','JavaScript')
'HiiJavaScript'


function add(name,age,city){
    return `Hi My Name is ${name} and age is ${age} from ${city}`
}


add('John','29','Amsterdam')
'Hi My Name is John and age is 29 from Amsterdam'
add('John','29')
'Hi My Name is John and age is 29 from undefined'
add('John','29','Amsterdam','Netherland')
'Hi My Name is John and age is 29 from Amsterdam'

//es6
let add = (a,b) =>  {return a+b}
add(1,2)
3