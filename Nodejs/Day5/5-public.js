import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('/get 으로 실행');

    res.status(200).send('get으로 첫페이지 실행');
});



app.use(express.static('public')); // public폴더안에 있는 파일을 직접 접근 가능하다. 경로명 필요 x

app.use('/files',express.static('public2')); //이렇다면 files 붙이고 접근해야함



app.listen(9090);