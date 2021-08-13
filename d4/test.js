// console
let count = 0
// log
console.log(count)
// time([label]), timeEnd([label])
console.time('Count')
for (i = 1; i < 20000; i++){
    count += 3
}
console.log(count)
console.timeEnd('Count')
// error([data])
if (count > 100) {
    console.error('The count is greater than 100!')
}

// path
// basename([string])
const path = require('path')
console.log(path.basename('/foo/baz/index.js'))
// return index.js


// crypto
const crypto = require('crypto')
console.log(crypto.randomInt(10))

const num = Math.random()
console.log(num)
console.log(num*20)
console.log(Math.floor(num*20))


