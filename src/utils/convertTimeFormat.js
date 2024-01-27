export function convertTimeFormat(timeString) {
  const [hour, minute] = timeString.split(':');
  const parsedHour = parseInt(hour, 10);
  const period = parsedHour >= 12 ? 'PM' : 'AM';
  const adjustedHour = parsedHour % 12 === 0 ? 12 : parsedHour % 12;
  return `${adjustedHour}:${minute} ${period}`;
}
