// 버퍼(buffer)
// 메모리에 저장되는 일부 공간
// 바이트 단위로 저장되며 integer 형태의 배열

const fs = require('fs');
const buf = Buffer.from('Hi')
console.log(buf);
console.log(buf.length);

console.log(buf[0]); // 이렇게 풀면 10진수로 풀어줌 위 코드는 16진수
console.log(buf[1]);

console.log(buf.toString()); 

const buf2 = Buffer.alloc(2);  // alloc(size) -> size 만큼 자리 할당
buf2[0] = 72;
buf2[1] = 105;

console.log(buf2);
console.log(buf2.toString());
console.log('--------------------------------------------------------');
// nodejs 를 메모리 버퍼에 저장하고 출력하기
// buf3에 저장

const buf3 = Buffer.from('nodejs');
console.log(buf3);
console.log(buf3[0]);
console.log(buf3[1]);
console.log(buf3[2]);
console.log(buf3[3]);
console.log(buf3[4]);
console.log(buf3[5]);
console.log('--------------------------------------------------------');
const buf4 = Buffer.alloc(6);
buf4[0] = 110;
buf4[1] = 111;
buf4[2] = 100;
buf4[3] = 101;
buf4[4] = 106;
buf4[5] = 115;

console.log(buf4.toString());  // 코드 바꿔주는 사이트 이용도 가능


//concat

const newBuf = Buffer.concat([buf, buf2,buf3]);
console.log(newBuf.toString());