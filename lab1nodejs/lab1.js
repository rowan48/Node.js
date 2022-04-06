

function sum(a,b) {
    if((typeof a != 'number') || (typeof b != 'number') ){
        console.log("please enter  numbers");
        throw new Error("please enter  numbers");


    }else{

        var sum =a+b;

    }

    return sum;
}
function sub(a,b){
    if((typeof a != 'number') || (typeof b != 'number') ){
        throw new Error("please enter  numbers");

    }else{

        var sub =a-b;

    }

    return sub;
}
function mul(a,b){
    if((typeof a != 'number') || (typeof b != 'number') ){
        throw new Error("please enter  numbers");
    }else{

        var mul =a*b;

    }

    return mul;
}
module.exports = {
    sum: sum,
    sub: sub,
    mul: mul
}
