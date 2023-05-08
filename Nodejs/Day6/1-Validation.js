import express from 'express';
//유효성 검사 모듈
import { body, param, validationResult } from 'express-validator';
const app = express();
app.use(express.json());

const validate = (req, res, next) => {
    // validattionResult => error 값을 생성
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(400).json({message: errors.array()})
}


app.post(
    '/users',
    [
        // 유효성 검사 -> 에러코드 만들기
        body('name').isLength({min:4}).withMessage('이름은 4글자 이상으로 입력하세요!'),
        body('age').isInt().withMessage('숫자를 입력하세요'),
        body('email').isEmail().withMessage('이메일 형식을 확인하삼').normalizeEmail(),
        // normalizeEmail -> 대소문자를 그냥 전부 소문자로 변경해줌
        body('job.name').notEmpty(),
        // job 객체에 name이 있는지 확인해줌
        validate
    
        // 문법 자체가 handler 이기 때문에 , 이후 원함수를 그냥 넣으면 된다. 위치를 항상 맞춰주자
    ],
    (req, res) => {
        console.log(req.body);
        res.sendStatus(201);
    }
);

// body => post 방식일떄
// param => get 방식일때

app.get(
    // /뒤에 오는것을 email 로 인식
    '/:email',
    [
        //trim -> 공백제거 -> 순서를 잘 생각하자 먼저 공백을 제거한후 뒤에 체이닝 진행
        param('email').trim().isEmail().withMessage('이메일 형식을 확인하세요! _____@____ 형식을 지켜주세요'),
        validate
    ],
    (req, res) => {
        console.log(req.body);
        res.sendStatus(200);
    }
)

app.listen(8080);