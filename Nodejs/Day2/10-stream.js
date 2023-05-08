const fs = require('fs');
//파일에서 스트림으로 읽기
const readStream = fs.createReadStream('./file.txt',{
    // 기본 데이터 64kbytes
    highWaterMark:8,          // 8bytes 씩 가져오기
    encoding: 'utf-8'         // UTF-8 인코딩
});

const beforeMem = process.memoryUsage().rss;
const data = [];
readStream.on('data', (chunk)=>{
    console.log(chunk);
    console.count('data');
    readStream.close();
});    // data 값마다 이벤트발생

//close()발생시 해줄 이벤트
readStream.on('close', ()=>{
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff/1024/1024;
    console.log(diff);
    console.log(`consumed Memory : ${consumed}MB`);
})


