/*
    REST(Representational State Transfer)
    자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미

    API(Application Programming Interface)
    기능의 집합을 제공해서 컴퓨터 프로그램간 상호작용을 하도록 하는것

    REST API
    REST 기반으로 API를 구현한 것

    CRUD Operation
    POST : 생성(Create)
    GET  : 조회(Read)
    PUT  : 수정(Update)
    DEL  : 삭제(Delete)

    */

import express from "express";

const app = express();

//app.메소드명("경로",(req, res)) 형식 , 특정 경로가 없다면 경로가 없는 모든것을 실행한다.


app.get('/', (req, res, next) => {
    res.send('<h2>익스프레스 서버로 만든 첫번째 페이지!</h2>');
});
// get방식으로 root 즉 '/' 로들어온다면, express는 하나의 블록을 실행한후 바로 넘어간다. 다음 함수를 실행하고 싶다면 next객체를 이용하여 처리한다.

app.get('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({name:"apple", "age":20})
});

app.use((req, res, next)=>{
    res.setHeader('node-skill','node middleware!!')
    next()
});
//next가 없으면 다음코드로 넘어가지 않을 뿐아니라 setHeader 부분도 사용자에게 전달되지 않음


app.use((req, res)=>{
    res.send('<h2>Not Found!</h2>')
});


app.listen(8080);
