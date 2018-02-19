'use strict'

const supportBindOperator = require('sbo')
const values = require('values-iterator')

module.exports = supportBindOperator((...args) => Array.from(values(...args)))
