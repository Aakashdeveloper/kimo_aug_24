import collections
from typing import List
from xml.dom.minidom import Element
from xmlrpc.client import SERVER_ERROR


List = []
Tuple = ()
Set = {}
Dict = {"name":"John"}

List
> Mutable collection of item
> Allow duplicate Element
> Element can be of different data types

>>> cars = ['Audi','BMW','Merc']
>>> type(cars)
<class 'list'>
>>> cars[1]
'BMW'
>>> cars[-1]
'Merc'
>>> cars[1:3]
['BMW', 'Merc']
>>> cars[:3]
['Audi', 'BMW', 'Merc']
>>> cars[:2]
['Audi', 'BMW']
>>> cars[2:]
['Merc']
>>>  cars = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
  File "<stdin>", line 1
    cars = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
IndentationError: unexpected indent
>>>  cars = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
  File "<stdin>", line 1
    cars = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
IndentationError: unexpected indent
>>>  car = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
  File "<stdin>", line 1
    car = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
IndentationError: unexpected indent
>>> cars = ['Audi','BMW','Merc','Skoda','Volvo','Woxa']
>>> cars[::2]
['Audi', 'Merc', 'Volvo']
>>> cars[::3]
['Audi', 'Skoda']
>>> cars.append('Kia')
>>> cars
['Audi', 'BMW', 'Merc', 'Skoda', 'Volvo', 'Woxa', 'Kia']
>>> cars.insert(3,'Maserati')
>>> cars
['Audi', 'BMW', 'Merc', 'Maserati', 'Skoda', 'Volvo', 'Woxa', 'Kia']
>>> cars.remove('Skoda')
>>> cars
['Audi', 'BMW', 'Merc', 'Maserati', 'Volvo', 'Woxa', 'Kia']
>>> cars.index('Volvo')
4
>>> cars.index('BYD')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'BYD' is not in list
>>> cars.sort()
>>> cars
['Audi', 'BMW', 'Kia', 'Maserati', 'Merc', 'Volvo', 'Woxa']
>>> 

Tuple
> Immutable
> Order collections
> fixed

fruits = ("Apple","Orange","Mango")

>>> fruits = ("Apple","Orange","Mango")
>>> fruits[1]
'Orange'
>>> fruits[1:]
('Orange', 'Mango')
>>> fruits[:1]
('Apple',)
>>> a = (1,2,3)
>>> b = (5,6,7)
>>> c = a+b
>>> c
(1, 2, 3, 5, 6, 7)
>>> 

Set
>> Mutable
>> Unique

mySet = {1,2,3,4,5}

Dict
mydict = {
    "name":"Sarah",
    "age":25,
    "city":"Amsterdam"
}
