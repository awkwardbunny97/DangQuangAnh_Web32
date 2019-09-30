'use strict'

function sort(input) {
  let temp 
  let n = input.length
  for(let i = 0; i<n-1; i++){
    for(let j = i+1; j<n; j++){
      if(input[i]>input[j]){
      temp = input[i]
      input[i] = input[j]
      input[j] = temp
      }
    }
  }
  return input
}

module.exports = sort
