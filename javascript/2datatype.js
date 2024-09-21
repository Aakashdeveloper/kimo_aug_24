true is equal to 1
false is equal to 0

var a = true
true+true
2
true +false
1
10/false
Infinity
10/false
Infinity
10+true
11
"true"+"true"
'truetrue'
"true"-"true"
NaN



var a = "10"
undefined
var b = "20"
undefined
a+b
'1020'
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30
parseInt(a+b)
1020
var a = "10.11"
undefined
var b = "20.24"
undefined
parseInt(a)+parseInt(b)
30

var a = "10.11"
var b = "20.24"
parseFloat(a)+parseFloat(b)
30.349999999999998


var a = "10a22"
parseInt(a)
10

var a = "a10a22"
parseInt(a)
NaN

var a = "10"
var b = "20"
Number(a)+Number(b)
30

var a = "10a22"
Number(a)
NaN