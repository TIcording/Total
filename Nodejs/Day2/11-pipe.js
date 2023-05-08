const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');   // 읽기
const zlibStream = zlib.createGzip();                 // 압축
const writeStream = fs.createWriteStream('./file3.zip'); // 내보내기

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () =>{
    console.log('Done!!');
})      // 끝낫을떄 실행할것

