/*
    bcrypt
    - 패스워드 암호화 알고리즘
    - 단방향 해싱 함수
    - Alg + Cost + Salt + Hash 로 구성
    
    Alg     : 해시 함수의 종류
    Cost    : 비밀번호를 해싱하는데 소요되는 작업량 (길수록 높은수준의 암호를 생성)/ 섞는횟수
    Salt    : 무작위 문자열, 해싱하는 데이터에 추가되어 보안성을 강화
    Hash    : 해시된 결과값으로, 암호화된 비밀번호를 나타냄

*/

const bcrypt = require('bcrypt');
const password = 'abcd1234';
const hashed = bcrypt.hashSync(password,10) // 10 -> cost

// $2b$10$jiHvT2MVzy2dSOFI9tnJeu.AwFbaGtB.zGVrzr8dkyHwhV6WwT8YC 
//    cost  salt 
console.log(`password : ${password}, hashed :${hashed}`)

// 비교하기
const result = bcrypt.compareSync('abcd1234',hashed);
console.log(`result : ${result}`);