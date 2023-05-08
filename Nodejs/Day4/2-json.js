const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'TI'
const skills =[
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'},
    {name: 'Nodejs'},
    {name: 'Python'}
]

const server = http.createServer((req,res) =>{
    const url =req.url
    const method = req.method; // 어떤방식으로 요청햇는지
    
    // method = 'GET' -> url를 통해 서버에 데이터를 요청할 때 / host 호출불가
    // console.log(url);
    // console.log(method); 

    if(method == 'GET'){
        // 2XX : 정상적인 호출
        // 4XX : 잘못된 페이지 호출
        // 5XX : 서버 에러 
        res.writeHead(200,{'Content-Type': 'application/json'}); // 사용자 브라우저에 json을 보내줄것을 알려줌
        res.end(JSON.stringify(skills))
    }else if(method == 'POST'){
        const body = []
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const bodyStr = Buffer.concat(body).toString();
            const skill = JSON.parse(bodyStr);
            skills.push(skill);
            console.log(skill);
            res.writeHead(201);
            res.end();
        });
    }
    // Postman -> Body -> raw -> Json 형태로 -> 보내면 string 형태로 buffer 저장
});

server.listen(8080);

// postman 설치
// https://www.postman.com/downloads/

