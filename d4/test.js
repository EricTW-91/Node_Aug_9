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
