var city = "amStEdAm"
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[2]
'S'

var a = "john"
undefined
var b = "John"
undefined
a == b
false
a.toUpperCase() == b.toUpperCase()
true


var city = 'amsterdam'
city.slice(1)
'msterdam'
city.slice(2)
'sterdam'
city.slice(2,4)
'st'
city.slice(2,8)
'sterda'

var city = "amStEdAm"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'mstedam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amstedam'
var city = "pAriS"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'


var uname = "   Nikita  "
undefined
uname.length
11
uname.trim()
'Nikita'