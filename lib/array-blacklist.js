'use strict';
module.exports = function (value1) {
    if (arguments.length < 2) {
        return value1;
    }
    var proto = Array.prototype
    var value2 = proto.concat.apply(proto, proto.slice.call(arguments, 1));
    return value1.filter(function (el) {
        return value2.indexOf(el) === -1;
    });
};