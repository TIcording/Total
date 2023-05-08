//fs 모듈 
const fs = require('fs');

/*
3가지 방법
    rename(..., callback(error,data))
    try{renameSync(...)} catch(e){}
    promises.rename(...).then().catch() 
    //동기적인 메소드 뒤에는 Sync를 붙인다.
*/

//동기식
try{
    fs.renameSync('./test.txt','./test-new.txt');
}catch(e){
    console.error(e);
}

// 비동기식
fs.rename('./test-new.txt','./test-new-new.txt',(error)=>{
    console.log(error);
})

console.log('파일이름 바꾸기!');            // 동기식 먼저 처리후 비동기 처리

// fs.promises.rename() 을 사용해서 test-new-new.txt를 test.txt로 변경해보자
// 변경되었다면 Done! 출력, 에러시 error객체를 출력

fs.promises.rename('./test-new-new.txt','./test.txt')
.then(()=>{console.log('Done!');})
.catch(console.error);