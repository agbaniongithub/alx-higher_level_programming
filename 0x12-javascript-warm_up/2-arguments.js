#!/usr/bin/node
function arguments() {
  if (process.argv[2] === false) {
   console.log('No Argument')
  }
  else if (process.argv[2] === true && process.argv[3] === false) {
    console.log('Argument found')
  }
  console.log('Arguments found')

}
