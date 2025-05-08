// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function sumNumbers () {
  const userInput = parseInt(document.getElementById('user-number').value)
  let sum = 0

  for (let counter = 1; counter <= userInput; counter++) {
    sum += counter
  }

  document.getElementById('sum-result').innerHTML = `<p><strong>The sum of all numbers from 1 to ${userInput} is ${sum}.</strong></p>`
}
