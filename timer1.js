// process.stdout.write('\x07'); // beep sound

let times = process.argv.slice(2);
timesNumbers = times
  // if no times given nothing will occur as there is no input
  // filter out time that is not a number
  .filter((time) => !isNaN(time))
  // filter out time that is a negative number
  .filter((time) => time >= 0)
  // make sure string numbers are numbers
  .map((el) => +el);

for (const time of timesNumbers) {
  console.log(time);
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
}

// for (let i = 0; i < timesNumbers.length; i++) {
//   console.log(timesNumbers[i]);
//   setTimeout(() => {
//     process.stdout.write("\x07");
//   }, timesNumbers[i] * 1000);
// }
