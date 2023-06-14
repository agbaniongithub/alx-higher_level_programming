#!/usr/bin/node
if (!process.argv[2]) {
   console.log('No Argument')
  }
else if (process.argv[2] && !process.argv[3]) {
    console.log('Argument found')
  }
console.log('Arguments found')
