import moment from 'moment'

const isoTime = "2024-02-13T11:30:00.000Z";

// Parse the ISO 8601 time using Moment.js
const parsedTime = moment(isoTime);

// Format the time to HH:mm
const formattedTime = parsedTime.format("HH:mm");

console.log(formattedTime)