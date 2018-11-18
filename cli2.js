#!/usr/bin/env node

const lundiakTestLogic = require('./index');

try {
  console.log(lundiakTestLogic(3,3));
} catch (e) {
  throw new Error(e.message);
}
