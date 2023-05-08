const fs = require('fs');
const beforeMem = process.memoryUsage().rss;
console.log(`BeforeMem: ${beforeMem}`)

fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => { })
    const afterMem = process.memoryUsage().rss
    console.log(`AfterMem: ${afterMem}`)
    const diff = afterMem - beforeMem
    const consumed = diff / 1024 / 1024;
    console.log(`diff:${diff}`)
    console.log(`Consumed Memory: ${consumed}MB`)
})
