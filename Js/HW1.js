$(function () {
    $(".main img").css("filter", "grayscale(1)");
})

let hasClicked = false;
let count = 0;
let totalScore = 0;
$(".main img").mouseenter(MouseEnter).mouseleave(MouseLeave).click(Click);




function MouseEnter() {
    let score = $(this).index() + 1;
    $(this).css("filter", "grayscale(0)").prevAll().css("filter", "grayscale(0)");
    $("#score").text(`打分中....目前選擇為${score}分`);
}

function MouseLeave() {
    $(".main").children("img").css("filter", "grayscale(1)");
    $("#score").text(``);
}


function Click() {
    hasClicked = !hasClicked;
    let score = $(this).index() + 1;
    if (hasClicked) {
        totalScore += score;
        console.log(score);
        console.log(totalScore);
        count++;
        $(this).prevAll().css("filter", "grayscale(0)");
        $(this).css("filter", "grayscale(0)");
        $("#score").text(`您的評分為:${score}分`);
        $("#score").css("color", "rgba(240,128,128,0.8)");
        $("#count").text(`評分次數:${count}次`);
        $("#count").css("color", "rgba(139,101,8,0.6)");
        $("#avg").text(`總平均分為:${(totalScore / count).toFixed(1)}`);
        $("#avg").css("color", "rgba(123,104,238,0.6)")
        $("img").off("mouseenter mouseleave");
    }
    else {
        // $(".main img").css("filter", "grayscale(1)");
        $("#score").text(``);
        $(".main img").mouseenter(MouseEnter).mouseleave(MouseLeave);
        $(".main img").css("filter", "grayscale(1)");
        $(this).css("filter", "grayscale(0)").prevAll().css("filter", "grayscale(0)");
        $("#score").text(`打分中....目前選擇為${score}分`);
        $("#score").css("color", "black");
    }
}

