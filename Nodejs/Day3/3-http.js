//http : 웹사이트 서비스를 하기위해 존재하는 모듈
const http = require('http');
const fs = require('fs');
// req : 들어오는정보           클라이언트 to 서버
// res : 사용자에게 전달할 객체  서버 to 클라이언트
const server = http.createServer((req, res) => {
    console.log('서버가 동작중입니다!')
    console.log(req.headers);        
    console.log(req.method);
    console.log(req.url);  // '/'
    const url = req.url

    
    //setHeader(keyvalue,)
    // Content-Type : 앞으로 보낼 데이터의 형태를 알려줌(파싱을 할 준비를 시켜줌) , text/html -> 파싱할 데이터 형태
    res.setHeader('Content-Type', 'text/html') // 사용자에게 정보를 전달한다. (타입,전달할것)
    if (url ==='/'){
        fs.createReadStream('./html/index.html').pipe(res);
    }else if (url ==='/mypage'){
        fs.createReadStream('./html/mypage.html').pipe(res);
    }else{
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
});

// TI.com : 80
// localhost :8080
server.listen(8080); // 클라이언트를 기다려주는것 
