let a = [1,2,3,4]
let b = ['a','b','c','d']

let out = [...a,...b]
out
(8) [1, 2, 3, 4, 'a', 'b', 'c', 'd']

let b = ['a','b',...a,'c','d']
b
(8) ['a', 'b', 1, 2, 3, 4, 'c', 'd']




function add(...args){
  
    console.log(args)
    let out = 0
    for(i=0;i<args.length;i++){
        out += args[i]
    }
    return out
}

let arr = [1,2,3,4]

add(...arr)



add(1,5,8,1)
VM614:2 (4) [1, 5, 8, 1]