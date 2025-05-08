// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS logic for simplified long division

'use strict'

function longDivide () {
  let dividend = parseInt(document.getElementById('dividend').value)
  let divisor = parseInt(document.getElementById('divisor').value)
  let quotient = 0
  let steps = ''

  // Loop to subtract divisor from dividend
  while (true) {
    if (dividend >= divisor) {
      steps += `${dividend} - ${divisor} = ${dividend - divisor}<br>`
      dividend -= divisor
      quotient++
    } else {
      break
    }
  }

  document.getElementById('sum-result').innerHTML =
    `<p><strong>Steps:</strong><br>${steps}</p>
    <p><strong>Result:</strong> Quotient = ${quotient}, Remainder = ${dividend}</p>`
}
