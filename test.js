// var array_blacklist = require('array_blacklist');

// var userInputArray = ['ok','good', 'great', 1, 'bad', 'evil', {},[],0,'zero'];
// var defaultRestrictions = ['bad', 'evil'];
// var moreRestrictions = [{},[],0];
// var evenMoreRestrictions = ['zero'];

// var cleanArray = array_blacklist(userInputArray, defaultRestrictions, moreRestrictions, evenMoreRestrictions);
// console.log(cleanArray); 

import test from 'ava';
import array_blacklist from './';


var userInputArray = ['ok','good', 'great', 1, 'bad', 'evil',0,'zero'];
var defaultRestrictions = ['bad', 'evil'];
var moreRestrictions = [0];
var evenMoreRestrictions = ['zero'];

test('multiple args test', t => {
	var cleanArray = array_blacklist(userInputArray, defaultRestrictions, moreRestrictions, evenMoreRestrictions);
    t.deepEqual(cleanArray, [ 'ok', 'good', 'great', 1]);
});


