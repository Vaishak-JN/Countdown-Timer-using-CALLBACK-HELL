//Method 1 

let p=document.getElementsByClassName("container")
let count=10;

function countdown(num,callback){
    if(num>0){
        setTimeout(() => {
            callback(num)
            
        }, 1000);
        p[0].innerText=num;
    }else{
        p[0].innerText="Wish you a good day"
    }
    
}
function callback(num){
        num=num-1;
        countdown(num,callback)
}

window.onload=setTimeout(() => {
    countdown(count,callback)
}, 1000);

// Method 2

// let p=document.getElementsByClassName("container")
// let count=10;

// function countdown(num,callback){
//     if(num>0){
//         callback(num)

//         p[0].innerText=num;

//     }else{
//         p[0].innerText="Wish you a good day"
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


// Method 3

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
