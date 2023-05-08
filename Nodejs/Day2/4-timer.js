console.log('code1');

console.time('timeout 0');
setTimeout(()=>{
    console.log('setTimeout 0');
    console.timeEnd('timeout 0');
},0);

console.log('code2');

// 등록된 콜백함수를 실행
setImmediate(()=>{
    console.log('setImmediate 0');
});

console.log('code3');

process.nextTick(()=>{
    console.log('Process.nextTick 0');
});                                     // process 모듈은 static 있는 모듈이기에 따로 require 안해도됨


//실행순서
// code1
// code2
// code3
// Process.nextTick 0
// setImmediate 0
// setTimeout 0
// 뒤에 두개는 둘다 콜백이고 비동기이지만 순서는 크게 의미도 없을 뿐더러 바뀔 수 있다. 