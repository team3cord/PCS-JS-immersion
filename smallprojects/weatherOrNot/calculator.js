#!/usr/bin/env node  

/**
 * Module dependencies.
 */

var program = require('commander');




program
  .version('0.0.1')
  .option('-s , --sum','Sum two args')
  .option('-d , --diff','Subtract two args')
  .parse(process.argv);
    
var arrr = program.args; 


function sum(){
    return parseInt(arrr[0]) + parseInt(arrr[1]) ;
}
if (program.sum) console.log(sum());
if (program.diff) console.log('diff: %j' , program.args);
