import express from 'express';

const app = express();
app.get('/posts', (req, res) => {
    console.log('posts를 호출!');
    console.log('path:',req.path);
    console.log('params:',req.params);
    //http://localhost:8080/posts?number=1
    console.log('query:',req.query);    // {number:'1'} 
    res.sendStatus(200);
});

app.get('/posts/:id', (req, res) => {
    console.log('/posts/:id를 호출!');
    console.log('path:',req.path);
    // http://localhost:8080/posts/1
    console.log('params:',req.params); // {id : '1'}
    console.log('query:',req.query);  
    res.sendStatus(200);
});

app.delete('/posts/:id', (req, res) => {
    console.log('delete /posts/:id를 호출!');
    console.log(`${req.params.id} 번호가 삭제됨`);
    res.sendStatus(200);
});
// 브라우저는 기본적으로 get으로 하기에 delete메소드를 사용하려면 postman을 이용해야 한다.

app.get(['/mypage','/myroom'],(req,res) => {
    res.send('mypage겸 myroom 페이지!');
});

app.listen(8080);