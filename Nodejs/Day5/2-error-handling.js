import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();
app.use(express.json());

app.get('/file1', (req, res) => {
    fs.readFile('/file1.txt',(err,data)=>{
        if(err) {
            res.sendStatus(404);
        }else{
            res.sendStatus(200);
        }
    })
})

app.listen(9090);

app.use((error,req,res,next)=>{
    console.error(error);
    res.status(500).join({message: '서버 에러!'});
})
//오류처리하기 : 동기식으로 되어있는 부분은 try catch문으로 에러처리한다.
app.get('/file2', (req, res) => {   
    try {
    const data = fs.readFileSync('./file2.txt');
    } catch (err) {
    res.status(404).send('파일이 존재하지 않습니다1.')
}

})

//오류처리하기 : promise 객체는 catch 추가
app.get('/file3', (req, res) => {
    fsAsync
    .readFile('/file3.txt')
    .catch((error)=> {
        res.status(404).send('파일이 없습니다2');
    })
});

//오류처리하기 : try catch 문 사용
app.get('/file4', async(req, res) => {
    try{
        const data = await fsAsync.readFile('/file4.txt');
    }catch(error){
        res.status(404).send('파일이 존재하지 않습니다3.')
    }
});






