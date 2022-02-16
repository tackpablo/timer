// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please input a time so I can beep at you:", (key) => {
//   if (key === "b") {
//     process.stdout.write("\x07");
//   }

//   if (key >= 1 && key <= 9) {
//     console.log(`Setting time for ${key} seconds...`);
//     setTimeout(() => {
//       process.stdout.write("\x07");
//     }, key * 1000);
//   }

//   // if (answer === ) {
//   //   console.log("Thanks for using me, ciao!");
//   //   rl.close();
//   // }

//   rl.close();
// });

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf-8");

console.log(
  `\nSimple Timer:\n\nb: to beep.\n1-9: set timer in seconds.\n^+c: exit.\n`
);

stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "b") {
    process.stdout.write("\x07");
  }

  if (key > 0) {
    console.log(`Setting time for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});
