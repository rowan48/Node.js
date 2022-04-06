var calc = require('./lab1');
//===========================sum=================================================================
var output=calc.sum(5,"g");//output is Error: please enter  numbers
var output2=calc.sum(5,5);
console.log(output2);//output is 10
//===========================sub=================================================================
var outputsub=calc.sub(5,"g");//output is Error: please enter numbers
var output2sub=calc.sub(5,5);
console.log(output2sub);//output is 0
//===========================mul=================================================================
var outputmul=calc.mul(5,"g");//output is Error: please enter  numbers
var output2mul=calc.mul(5,5);
console.log(output2mul);//output is 25
//============================================age-calculator===================================================
var age=require('./age-calculator');
//=======================================Invalid data===============================================
var output3=age.main("rowan","2021");
                                       /*output is :
                                        hello rowan please enter a valid year*/
//===============================valid data====================================================
var output4=age.main("rowan","11/2/1999");
/*
output is :
hello rowan 22
*/



