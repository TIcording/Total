//route란 메소드는 다르지만 경로는 똑같을떄 묶어서 프로그래밍을 가능하게 하는것(미들웨어)

//원래 형태
import express from 'express';

const app  = express();

// app.get('/posts', (req, res) => {
//     res.status(200).send('GET:/posts');
// });

// app.post('/posts', (req, res) => {
//     res.status(201).send('POST:/posts');
// });

// app.put('/posts/:id', (req, res) => {
//     res.status(201).send('PUT:/posts/:id');
// });

// app.delete('/posts/:id', (req, res) => {
//     res.status(200).send('DELETE:/posts/:id');
// });


// 라우팅한것
app
    .route('/posts')
    .get((req, res) => {
    res.status(200).send('GET:/posts');
    })
    .post((req, res) => {
        res.status(201).send('POST:/posts');
    });

app
    .route('/posts/:id')
    .put((req, res) => {
        res.status(201).send('PUT:/posts/:id');
    })
    .delete((req, res) => {
        res.status(200).send('DELETE:/posts/:id');
    });

app.listen(9090);