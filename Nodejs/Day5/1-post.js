import express from 'express';

const app = express();
app.use(express.json()); // body로 데이터를 받을 수 있게됨

app.post('/posts',(req, res) => {
    console.log(req.body);
    res.status(201).send('Create 되었습니다!');
});


app.listen(8080);

