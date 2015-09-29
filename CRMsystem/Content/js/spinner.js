function spinnerStart(elem) {
    spinnerFinish();
    $(elem).append('<div class="ball"></div><div class="ball1"></div>');
}

function spinnerFinish() {
    $(".ball").remove();
    $(".ball1").remove();
}
