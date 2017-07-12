var moment = require('moment');

console.log(moment().format());

//unix time stamps
// 1er Juin 1970 @ 12:00am --> 0
// 1er Juin 1970 @ 12:01am --> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1499773596;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

//January 3rd, 2016 @ 12:37 AM
console.log('Challenge current moment', currentMoment.format('MMMM Do, YYYY @ HH:mm A'));
