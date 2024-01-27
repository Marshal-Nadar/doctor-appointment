export function convertDateFormat(inputDate) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateParts = inputDate.split('-');
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Months are zero-indexed in JavaScript
  const day = parseInt(dateParts[2], 10);

  const inputDateObject = new Date(year, month, day);
  const dayOfWeek = daysOfWeek[inputDateObject.getDay()];
  const monthName = months[month];

  return `${dayOfWeek}, ${monthName} ${day}`;
}
