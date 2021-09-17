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
                                                p[0].innerText="Wish you a good day";
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