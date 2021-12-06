var intervalID = window.setInterval(myCallback, 500);
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    }
})
function hms(seconds) {
    return [3600, 60]
        .reduceRight(
            (p, b) => r => [Math.floor(r / b)].concat(p(r % b)),
            r => [r]
        )(seconds)
        .map(a => a.toString().padStart(2, '0'))
        .join('-');
}
function time() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + '<br>' + time;
    document.getElementById("time").innerHTML = dateTime;
}
function christmastime() {
    var today = new Date();
    var date = '<b>' + (today.getMonth() - 11) + ' month<br>' + (22 - today.getDate()) + ' days <br>';
    var time = (24 - today.getHours()) + " hours <br>" + (60 - today.getMinutes()) + " minutes <br>" + (60 - today.getSeconds()) + ' seconds </b>';
    var dateTime = date + ' ' + time;
    document.getElementById("christmastime").innerHTML = dateTime;
}
function newyeartime() {
    var today = new Date();
    var date = '<b>' + (today.getMonth() - 11) + ' month<br>' + (29 - today.getDate()) + ' days <br>';
    var time = (24 - today.getHours()) + " hours <br>" + (60 - today.getMinutes()) + " minutes <br>" + (60 - today.getSeconds()) + ' seconds </b>';
    var dateTime = date + ' ' + time;
    document.getElementById("newyeartime").innerHTML = dateTime;
}
function eastertime() {
    var today = new Date();
    var date = '<b>' + (15 - today.getMonth()) + ' month<br>' + (16 - today.getDate()) + ' days <br>';
    var time = (24 - today.getHours()) + " hours <br>" + (60 - today.getMinutes()) + " minutes <br>" + (60 - today.getSeconds()) + ' seconds </b>';
    var dateTime = date + ' ' + time;
    document.getElementById("eastertime").innerHTML = dateTime;
}
function myCallback() {
    time();
    christmastime();
    newyeartime();
    eastertime();
}
