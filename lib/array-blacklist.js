
var equals = require('deep').equals

module.exports = function(value1){

    if (arguments.length < 2) {
        return value1;
    }
    var value2 = [].concat.apply(this,[].slice.call(arguments, 1));

    var cleansedArr = [];

    value1.forEach(function(val1){

        if(typeof val1 == 'object'){

            if(!value2.some(function(val2){ return equals(val1,val2);})){

                cleansedArr.push(val1);
            }

        } else if(value2.indexOf(val1) === -1){
            cleansedArr.push(val1);
        } 
    });
    return cleansedArr;
}