//Method 1 

// let t=document.getElementsByClassName("container")
// let count=10;

// function countdown(num,callback){
//     if(num>0){
//         setTimeout(() => {
//             callback(num)
            
//         }, 1000);
//         t[0].innerText=num;
//     }else{
//         t[0].innerText="Wish you a good day"
//     }
    
// }
// function callback(num){
//         num=num-1;
//         countdown(num,callback)
// }

// window.onload=setTimeout(() => {
//     countdown(count,callback)
// }, 1000);

// Method 2

// let c=document.getElementsByClassName("container")
// let count=10;

// function countdown(num,callback){
//     if(num>0){
//         callback(num)

//         c[0].innerText=num;

//     }else{
//         c[0].innerText="Wish you a good day"
//     }
    
// }
// function callback(num){
//         setTimeout(() => {
//             num=num-1;
//             countdown(num,callback)
//         }, 1000);
// }

// window.onload=setTimeout(() => {
//     countdown(count,callback)
// }, 1000);


// Method 3 (using promises)


// let val=document.getElementsByClassName("container")
// let count=11;

// const promise= new Promise((resolve,reject)=>{
//     setInterval(() => {
//         count=count-1
//         if(count>0){
//             resolve("fulfilled");
//             val[0].innerText=count
//         }else{
//             reject("error");
//             val[0].innerText="Wish you a good day";
//         }
//     }, 1000);
// })


// Method 4 (using just setInerval)

// let time=document.getElementsByClassName("container")
// let count=11;
// function timer(count){
//     setInterval(() => {
//         count=count-1
//         if(count>0){           
//             time[0].innerText=count
//         }else{           
//             time[0].innerText="Wish you a good day";
//         }
//     }, 1000);
// }
// timer(count) 


// Method 5

// let p=document.getElementsByClassName("container")
// function countDown(){
//     setTimeout(() => {
//         p[0].innerText="10"
//         setTimeout(() => {
//             p[0].innerText="9"
//             setTimeout(() => {
//                 p[0].innerText="8";
//                 setTimeout(() => {
//                     p[0].innerText="7";
//                     setTimeout(() => {
//                         p[0].innerText="6";
//                         setTimeout(() => {
//                             p[0].innerText="5";
//                             setTimeout(() => {
//                                 p[0].innerText="4";
//                                 setTimeout(() => {
//                                     p[0].innerText="3";
//                                     setTimeout(() => {
//                                         p[0].innerText="2";
//                                         setTimeout(() => {
//                                             p[0].innerText="1";
//                                             setTimeout(() => {
//                                                 p[0].innerText="Wish you a good day";
//                                             }, 1000);
//                                         }, 1000);
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// window.onload=countDown

// for chinku chechi birthday
// **********************************
let p=document.getElementsByClassName("container")
function countDown(){
    setTimeout(() => {
        p[0].innerText="10"
        setTimeout(() => {
            p[0].innerText="9"
            setTimeout(() => {
                p[0].innerText="8";
                setTimeout(() => {
                    p[0].innerText="7";
                    setTimeout(() => {
                        p[0].innerText="6";
                        setTimeout(() => {
                            p[0].innerText="5";
                            setTimeout(() => {
                                p[0].innerText="4";
                                setTimeout(() => {
                                    p[0].innerText="3";
                                    setTimeout(() => {
                                        p[0].innerText="2";
                                        setTimeout(() => {
                                            p[0].innerText="1";
                                            setTimeout(() => {
                                                p[0].innerText="Happy birthday CHINKUZZ";
                                                setTimeout(() => {
                                                    p[0].innerText="ചെലവ് എപ്പോൾ തരും?";
                                                }, 4000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

window.onload=countDown
