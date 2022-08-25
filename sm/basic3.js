function sum(...args){
    let s=0
    for(let arg of args){
        s=s+arg
    }
    return s
}

let a=sum(1,2,3,4,5,6,7,8,9,10)
console.log(a)

function add(x,y=10){
    let s=0
    return x+y

}

let b=add(20)
let c=add(10,30)
console.log(b)
console.log(c)