let slideNum = 0;

let slideCount = $(".slides li").length;
//console.log(slideCount);
let lastIndex = slideCount - 1;
let width = $(".wrapper").width();
// console.log($(".wrapper").width());
// console.log($(".dot li"));

$(".dot li:first").css("background-color", "rgba(255,250,250,0.7)");

$(".dot li").mouseenter(function () {

    slideNum = $(this).index();
    console.log(slideNum);
    show();
})

$("#prevBtn").click(function () {

    slideNum--;

    slideNum = slideNum < 0 ? lastIndex : slideNum;

    show();

})

$("#nextBtn").click(function () {

    slideNum++;

    slideNum = slideNum > lastIndex ? 0 : slideNum;

    console.log(slideNum);
    show();
})




function show() {
    $(".dot li").eq(slideNum).css("background-color", "rgba(255,250,250,0.7)").siblings().css("background-color", "transparent");

    let width = $(".wrapper").width();
    let move = 0 - width * slideNum;
    $("ul.slides").css("left", move);
}


let myInterval = setInterval(play, 1500);


$(".wrapper").hover(function () {
    clearInterval(myInterval);
}, function () {
    myInterval = setInterval(play, 1500);
})



function play() {

    slideNum++;

    slideNum = slideNum > lastIndex ? 0 : slideNum;

    $(".dot li").eq(slideNum).css("background-color", "rgba(255,250,250,0.7)").siblings().css("background-color", "transparent");

    let move = 0 - width * slideNum;
    $("ul.slides").css("left", move);
}