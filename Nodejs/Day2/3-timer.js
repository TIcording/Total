let num =1;
const inerval = setInterval(()=>{
    console.log(num++);
},1);                              // 컨트롤 c : 멈춤

setTimeout(()=>{
    console.log('timeout!');
    clearInterval(inerval);
},5000);

