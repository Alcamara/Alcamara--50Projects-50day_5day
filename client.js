

$(document).ready(readyNow);


function readyNow() {
     $('.loading-test').on('click', unblurImage)
}

function unblurImage() {
    let loading = 0;
    var interval = setInterval(function(){
        if(loading > 98) clearInterval(interval);
        loading++;
        console.log(loading);
        $('.loading-test').html(`${loading}%`).css({
            opacity: scale(loading,0,100, 1, 0)
        })
        $('.bg').css({
            filter: `blur(${scale(loading,0,100, 30, 0)}px)`
        })
    },30)
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

