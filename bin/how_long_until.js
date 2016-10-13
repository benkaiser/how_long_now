#!/usr/bin/env node

var HowLong = require('../index.js');

new HowLong(process.argv[2]).print();
