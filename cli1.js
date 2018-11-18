#!/usr/bin/env node

const lundiakTestLogic = require('./index');

try {
  console.log(lundiakTestLogic());
} catch (e) {
  throw new Error(e.message);
}
