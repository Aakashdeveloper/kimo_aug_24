# def add(a,b):
#     return a+b

# print(add(3,6))


def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(3,1))
   