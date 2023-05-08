import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


const app = express();

app.use(morgan('common'));
app.use(cors());

app.get('/', (req, res) => {
    console.log('/get 메인페이지 호출!');
    res.send('welcome');
});

app.listen(9090);

