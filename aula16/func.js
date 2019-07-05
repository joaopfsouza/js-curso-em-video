function parimp(n=900){
    console.log(n)
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimp())


function soma(x=0,y=0){
    return x+y
}

console.log(soma(3,5))
console.log(soma(3))


var f = function(x){
    return x*2
}

console.log(f(67))


function fatorial(n){
    if(n==0){
        return 1
    }

    return n*fatorial(n-1)
}

console.log(fatorial(4))


function fatorial2(n){

    let f = 1
    for(var i = n; i>=1; i--){

        f *= i
    }

    return f
}

console.log(fatorial2(5))