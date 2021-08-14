// loader

$(".loader").fadeOut(3000,function(){
        $(".parentloader").fadeOut(1500)
});

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
// let img4 = document.getElementById('img4');

img1.onmouseover = function () {
        let srcImgOne = img1.getAttribute('src');
        if (srcImgOne === 'imgs/jeans.jpeg') {
                img1.setAttribute('src', 'imgs/jane.jpeg');
        } else if (srcImgOne === 'imgs/jane.jpeg') {
                img1.setAttribute('src', 'imgs/istockphoto-1219750966-612x612.jpeg')
        } else if (srcImgOne === 'imgs/istockphoto-1219750966-612x612.jpeg') {
                img1.setAttribute('src', 'imgs/runway.jpeg')
        } else {
                img1.setAttribute('src', 'imgs/jeans.jpeg');
        }
}

img2.onmouseover = function () {
        let srcImgTwo = img2.getAttribute('src');
        if (srcImgTwo === "imgs/avatar_hat.jpeg") {
                img2.setAttribute('src', 'imgs/girl_hat.jpeg');
        } else if (srcImgTwo === 'imgs/girl_hat.jpeg') {
                img2.setAttribute('src', 'imgs/people-2591874__480.webp')
        } else if (srcImgTwo === 'imgs/people-2591874__480.webp') {
                img2.setAttribute('src', 'imgs/team4.jpeg')
        } else {
                img2.setAttribute('src', 'imgs/avatar_hat.jpeg');
        }
}

img3.onmouseover = function () {
        let srcImgTwo = img3.getAttribute('src');
        if (srcImgTwo === "imgs/team1.jpeg") {
                img3.setAttribute('src', 'imgs/man_hat.jpeg');
        } else if (srcImgTwo === 'imgs/man_hat.jpeg') {
                img3.setAttribute('src', 'imgs/istockphoto-1256656985-612x612.jpeg')
        } else if (srcImgTwo === 'imgs/istockphoto-1256656985-612x612.jpeg') {
                img3.setAttribute('src', 'imgs/runway.jpeg')
        } else {
                img3.setAttribute('src', "imgs/team1.jpeg");
        }
}

// img4.onmouseover = function () {
//         let srcImgTwo = img4.getAttribute('src');
//         if (srcImgTwo === "imgs/team4.jpeg") {
//                 img4.setAttribute('src', 'imgs/photographer-407068__340.webp');
//         } else if (srcImgTwo === 'imgs/photographer-407068__340.webp') {
//                 img4.setAttribute('src', 'imgs/jane.jpeg')
//         } else if (srcImgTwo === 'imgs/jane.jpeg') {
//                 img4.setAttribute('src', 'imgs/man_hat.jpeg')
//         } else {
//                 img4.setAttribute('src', 'imgs/team4.jpeg');
//         }
// }

/************************ input *****************************/

let input = document.querySelector('input');

input.onfocus = function () {
        this.setAttribute('placeholder', ' ');
}
input.onblur = function () {
        let dataPlace= this.getAttribute('data-placeholder')
        this.setAttribute('placeholder',dataPlace )
}

/********************* button subscribe *************************/

let btnsubscribe = document.getElementById("subscribe");
let hide = document.getElementById("hide");
let close = document.getElementById("closed");

btnsubscribe.onclick = function(){
        hide.style.display = "block";
}
close.onclick = function(){
        hide.style.display = "none";
}

// $("#subscribe").click(function(){
//         $("#hide").css({display:'block'});
// });

// $("#closed").click(function(){
//         $("#hide").css({display:'none'});
// });

/***************** scroll *******************/

$(window).scroll(function(){
        $scroll = $(this).scrollTop();
        if($scroll >=1000){
                $("#scroll").css({'display':'block'});
        }else{
                $("#scroll").css({'display':'none'});
        }
});
$('#scroll').click(function(){
        $(window).scrollTop(0);
});
/********************* repliesOne *********************/

$("#repliesone").click(function(){
        $("#george").slideToggle(1000);
});

/********************* repliesTwo *********************/
$("#repliestwo").click(function(){
        $("#aber-angie").slideToggle(1000);
});
/********************* repliesTwo *********************/
$("#repliesthree").click(function(){
        $("#jane-john-anja").slideToggle(1000);
});


/********************* likes *************************/

$('#like').click(function(){
        $like = $('#inside').attr('class');
        if($like === 'fas fa-thumbs-up'){
                $('#inside').attr('class','fas fa-check')
        }else{
                $('#inside').attr('class','fas fa-thumbs-up')
        }
});

$('#liketwo').click(function(){
        $like = $('#insidetwo').attr('class');
        if($like === 'fas fa-thumbs-up'){
                $('#insidetwo').attr('class','fas fa-check')
        }else{
                $('#insidetwo').attr('class','fas fa-thumbs-up')
        }
});

$('#likethree').click(function(){
        $like = $('#insidethree').attr('class');
        if($like === 'fas fa-thumbs-up'){
                $('#insidethree').attr('class','fas fa-check')
        }else{
                $('#insidethree').attr('class','fas fa-thumbs-up')
        }
});