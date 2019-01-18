const { performance } = require('perf_hooks');

function perfTime(func, input) {
  let t1 = performance.now();
  func(input)
  let t2 = performance.now();
  console.log(`${func.name}: \t${(t2-t1) / 1000 } sec.`);
}

module.exports = {
  perfTime
}