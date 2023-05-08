const os = require('os');

// 객체 확인하기
console.log(os.EOL==='\n'); // 맥 : true 
console.log(os.EOL==='\r\n'); // 윈도우 :true

//os 메소드들
console.log(os.totalmem()); // 전체 메모리
console.log(os.freemem());  // 남은 메모리
console.log(os.type());     // 사용자 환경?
console.log(os.userInfo()); // 사용자 정보
console.log(os.cpus());     // CPU 정보
console.log(os.homedir());  // 기본이 되는 디렉토리
console.log(os.hostname()); // 기본이되는 주소를 가지고 있는 파일