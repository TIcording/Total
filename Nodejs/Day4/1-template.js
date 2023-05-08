// 공식 홈페이지 https://ejs.co/
//일단 서버가 필요


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

const server = http.createServer((req, res)=>{
    const url = req.url;       // '/'
    res.setHeader('Content-Type', 'text/html');
    if (url === '/'){
        ejs
        .renderFile('./template/index.ejs',{name:name})// ejs 를 읽어서 변환한다, 뒤에 매개변수는 HTML에서 사용가능 
        .then((data)=>{
            res.end(data);  // data를 res, 즉 사용자에게 보내고 끝낸다.
        })
    }else if (url === '/mypage'){
        ejs
        .renderFile('./template/mypage.ejs',{skills:skills})
        .then((data)=>
            res.end(data)); 
    }else{
        ejs
        .renderFile('./template/not-found.ejs',{name:name})
        .then((data)=>{
            res.end(data);
        });
    }
});

    //위 페이지 외에 호출시 not-found.ejs 페이지 출력
    // xxx님이 요청하신 페이지를 찾을 수 없습니다!(NOT Found!)

server.listen(8080);  // 클라이언트를 기다려주는것 


// <%%> -> HTML에서 자바스크립트 문법쓰끼 ejs에서만? , <%%>안 = -> 프린트 역할


