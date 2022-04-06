var sum1 = require('./lab1');
var output=sum1.sum(5,"g");//output is please enter a valid numbers
var output2=sum1.sum(5,5);
console.log(output2);//output is 10
var age=require('./age-calculator');
var output3=age.main("rowan","2021");
                                       /*output is :
                                        hello rowan please enter a valid year*/
var output4=age.main("rowan","11/2/1999");
/*
output is :
hello rowan 22
*/



