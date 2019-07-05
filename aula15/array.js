let num = [1,2,'joao', new Date()]

console.log(num)

num[4]='olha'

console.log(num)

num.push('Arthur sai do computador')

console.log(num)

console.log(num.length)
num.sort()
console.log(num)


let num2 = [43,65,1,54,8,32,0]
num2.sort()
console.log(num2)

for(var i in num){
    console.log(num[i])
}

console.log(num.indexOf('joao'))