// jwt
// npm i jsonwebtoken

const jwt = require('jsonwebtoken');
const secret = '^Vmg554$ur&z98ZDiB$f&jAY^sqg*c';

//jwt.sign ->  JWS 생성 메소드
const token = jwt.sign(
    {
        //저장할것들
        id : 'apple',
        name : '김사과',
        isAdmin : false
    },
    // 사용되는 비밀키?
    secret,
    {   // 얼마나 저장해 놓을지 (초기준)
        expiresIn : 60 // 60초
    }
);

// verify -> 다시 풀어주는것 , secret 을 복호화 하여 console로그로 찍어보기, 만료되면 오류뜸
setTimeout(()=>{
    jwt.verify(token, secret, (error, decoded)=>{
        console.log(error,decoded)
    })
},3000);

console.log(token);