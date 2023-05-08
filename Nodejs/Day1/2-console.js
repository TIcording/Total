console.log('로딩중.....');
console.clear();

console.log('log');  // 개발
console.info('info');  // 정보
console.warn('warn');  // 경고
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2==2,"두 값이 같아요!"); // 값 출력되지 않음 
console.assert(2==3, "두 값이 달라요!") // 값이 출력됨

const user ={userid:'apple', name:'김사과', age:20,company:'SK',addr:"서울 중구"};

console.log(user);
console.table(user);
console.dir(user,{showHidden:true, deepth:0, colors:false});

//실행시간 확인
console.time('for loop');
for(let i=0;i<10;i++){
    console.log(i);
}
console.timeEnd('for loop');

console.log('-----------------------------')


// 함수 실행 카운트
function func1(){
    console.log('fun1()실행!');
    console.count('func1 function');
}

function func2(){
    console.log('fun2()실행!');
}

func1();
func2();
func1();
console.countReset('func1 function');  // 횟수 리셋
func1();

console.log('-----------------------------')

//trace 사용법 : 어디서 부터 왔는지 히스토리를 설명
function func3(){
    func4();
}
function func4(){
    func5();
}
function func5(){
    console.log('func5()가 실행!')
    console.trace();
}


func3();