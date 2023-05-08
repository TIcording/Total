// 라우팅을 조금더 깔끔히 다루는법

import express from 'express';
import postRouter from './routes/post.js'
import userRouter from './routes/user.js'


const app = express();

app.use(express.json());

app.use('/users',userRouter);  // Router를 각각 모듈화 한후 메인코드를 깔끔히 한다
app.use('/posts',postRouter);



app.listen(8080);

