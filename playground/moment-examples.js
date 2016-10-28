var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @12:00 am -> 0
// January 1st 1970 @12:01 am -> 60

var now = moment();
console.log('Current timestamp', now.unix()); // number of seconds (not milliseconds)

var timestamp = 1477692496;
var curerntMoment = moment.unix(timestamp);
console.log('curerntMoment', curerntMoment.format('MMMM Do, YYYY @ H:mm A'));
