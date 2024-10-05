array is a collection of homogeneous as well as hetrogenious
data type

let a = [1,34,46,354,67,364]
let b = ["dd","Sdgsdgdf","dgsdg","Gdg"]
let c = [true,true,false,false,true]
let d = [3534,35,"35","dgdfg","fdg",true,4545,"fghdf"]


let city = ["Delhi","Mumbai","Amsterdam","Helsinki"]
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Helsinki'

let city = ["Delhi","Mumbai","Amsterdam","Helsinki"]
city.push('London')
5
city
(5) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London']
city.push('Newyork')
6
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']
city.unshift('Boston')
7
city
(7) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']


city
(7) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']
city.pop()
'Newyork'
city
(6) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London']
city.pop(2)
city
(7) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']
city.pop()
'Newyork'
city
(6) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London']
city.pop(2)
'London'
city
(5) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki']
city.pop(20000)
'Helsinki'
city.shift()
'Boston'

push > add value in the end of array
pop > remove the last value
shift> remove the first value
unshift > add value in the beginning of array


let city = ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']
undefined
city.slice(1)
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London', 'Newyork']
city.slice(2,5)
(3) ['Mumbai', 'Amsterdam', 'Helsinki']
city.slice(-1)
['Newyork']
city.slice(0,-1)
(6) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'London']
city.slice(0,-2)
(5) ['Boston', 'Delhi', 'Mumbai', 'Amsterdam', 'Helsinki']

splice(startIndex, delete count, values)

let city = ['Boston', 'Delhi', 'Mumbai', 'Amsterdam']

// index 2 add one value but do not delete any
city.splice(2,0,'Innsburg')
[]
city
(5) ['Boston', 'Delhi', 'Innsburg', 'Mumbai', 'Amsterdam']


// on index 3 remove 1 value
(5) ['Boston', 'Delhi', 'Innsburg', 'Mumbai', 'Amsterdam']
city.splice(3,1)

['Mumbai']
city
// on index 1 remove 1 value and add 2
(4) ['Boston', 'Delhi', 'Innsburg', 'Amsterdam']
city.splice(1,1,'Indore','Keev')

['Delhi']
city
(5) ['Boston', 'Indore', 'Keev', 'Innsburg', 'Amsterdam']


let a = ['Boston', 'Delhi', 'Innsburg', 'Mumbai', 'Amsterdam']
undefined
a.indexOf('Mumbai')
3
a.indexOf('Boston')
0
a.indexOf('London')
-1
a.indexOf('Pune')
-1