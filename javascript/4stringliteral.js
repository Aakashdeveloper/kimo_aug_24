var mname = "Avengers"
var type = "Action"
var ind = "Bollywood"
var rating = 4.3

//es5
var out = "An "+mname+" is an "+type+" movie with rating of "+rating+" from ind "+ind+"."
'An Avengers is an Action movie with rating of 4.3 from ind Bollywood.'

//es6
var out = `An ${mname} is an ${type} movie with rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movie with rating of 4.3 from ind Bollywood.'