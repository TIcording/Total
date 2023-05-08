// 프로세스 기능을 사용할 수 있는 모듈
const process = require('process');


//프로퍼티
console.log(process.execPath);      // 노드가 실행되는 위치
console.log(process.version);       // 노드 버젼
console.log(process.pid);           // process id 를 가르킴
console.log(process.ppid);          // 부모의 process id 를 가르침(어덯게 보면 실제 프로세스 아이디로 생각할 수 있음)
console.log(process.platform);      //  
console.log(process.env);           // 환경값들, 환경변수들이 담겨져 있다.
//메소드
console.log(process.uptime());      // 실행하며 걸린 시간
console.log(process.cwd());         // 현재 동작 위치
console.log(process.cpuUsage());    // 이파일의 용량, user 와 시스템에서의 사용 용량을 표시해줌

setTimeout(() => {
    console.log('setTimeout')
}, 0);                          //0으로 주더라도 단일 스레드이므로 전체가 실행하고 나서야 실행된다.


process.nextTick(()=>{
    console.log('nextTick');
})                              // 콜백에서 가장 우선순위를 가지게 하는 메소드



for( let i = 0; i < 10; i++){
    console.log('for loop:', i );
}

                                // 메인스레드인 for문이 먼저 실행되고 콜백인 setTImeout이 실행된다.




