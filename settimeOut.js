/*  function x(){
    var i =1;
    setTimeout(() => {
        console.log('timer')
        }, 3000);
    console.log("Hello")
 }
 x()
 */

 function x(){
    for (var i = 1; i <=   5; i++) {
       function close(x){
        setTimeout(() => {
            console.log(x)
        }, 1000 * x);
       }
       close(i)
    }
 }
 console.log(x())
