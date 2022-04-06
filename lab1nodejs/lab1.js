

function sum(a,b) {
    if((typeof a != 'number') || (typeof b != 'number') ){
        console.log("please enter a valid numbers");

    }else{

        var sum =a+b;

    }

    return sum;
}

module.exports = {
    sum: sum
}
