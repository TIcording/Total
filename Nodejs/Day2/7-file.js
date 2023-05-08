const fs = require('fs').promises; // fs의 promises기능만 가져오기

//파일 읽기
fs.readFile('./test.txt')
    .then((data) => console.log(data))
    .catch(console.error);
                            // 제대로 인코딩되지 않은 데이터로 가져옴
console.log('-----------------------------');

fs.readFile('./test.txt','utf-8') // 뒤에 원하는 인코딩방식 적어주기
    .then((data) => console.log(data))
    .catch(console.error);

// 파일 출력
fs.writeFile('./write.txt', 'Hello! 파일 출력 예제입니다!')
    .catch(console.error);

// 파일 추가 출력
fs.appendFile('./write.txt', '추가로 글을 출력합니다!')
    .catch(console.error);

//복사
fs.copyFile('./test.txt', './test2.txt')
    .catch(console.error);

// 디렉토리 생성
fs.mkdir('subdir')
    .catch(console.error);

//디렉토리 리스트 확인
fs.readdir('./')
    .then(console.log)
    .catch(console.error);




