#! /usr/bin/env node
const args = process.argv.slice(2).split(" ")
if (args.length < 2) {
  console.error('Please enter at least command');
  process.exit(1); //an error occurred
}
if (args[0] == "create"){console.log("wip")}
else {
  console.log("wip")
}
process.exit(0); //no errors occurred