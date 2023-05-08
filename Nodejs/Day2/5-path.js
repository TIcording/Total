//path 모듈 : 폴더위치나 파일 위치를 알아내거나 만들어내는 모듈이다.
const path = require('path');

//POSIX(Unix,Linux,Mac) : 'user/temp/5-path.js'
// Windows  : 'C:\\Users\\user\\temp\\5-path.js'

console.log(__dirname);     // 현재 내 디렉토리
console.log(__filename);    // 파일명 까지 출력

console.log(path.sep);          // 각각의 구분자
console.log(path.delimiter);    // 드라이브의 구분자?

console.log(path.basename(__filename)); // 파일이름만 가져오기
console.log(path.basename(__filename,'.js')); // 확장명까지 제외

console.log(path.dirname(__filename)); // 파일이 있는 디렉토리
console.log(path.extname(__filename)); // 확장자만

const persed = path.parse(__filename);  // 파일경로를 객체화 시켜서 가져온다.
console.log(persed);
console.log(persed.root);
console.log(persed.name);

const str = path.format(persed); // 문자열로 변환
console.log(str);

console.log('isAbsolute:',path.isAbsolute(__dirname)); //절대경로 판별
console.log('isAbsolute:',path.isAbsolute('../'));    

console.log(path.normalize('./nodejs//////////sub')) //현실성 있는 이름으로 바꿈

// C:\Song\Nodejs\Day2 
// C:\Song\Nodejs\Day2\image 로 바꾸기

console.log(__dirname +"\\" +'image');
console.log(__dirname +path.sep+'image');  
console.log(path.join(__dirname, 'image'));  