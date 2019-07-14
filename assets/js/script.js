const fart1 = new Audio('assets/audio/farts/fart1.wav');
const fart2 = new Audio('assets/audio/farts/fart2.wav');
const fart3 = new Audio('assets/audio/farts/fart3.wav');
const fart4 = new Audio('assets/audio/farts/fart4.wav');
const fart5 = new Audio('assets/audio/farts/fart5.wav');
const fart6 = new Audio('assets/audio/farts/fart6.wav');
const fart7 = new Audio('assets/audio/farts/fart7.wav');
const fart8 = new Audio('assets/audio/farts/fart8.wav');
const fart9 = new Audio('assets/audio/farts/fart9.wav');
const fart10 = new Audio('assets/audio/farts/fart10.wav');
const fart11 = new Audio('assets/audio/farts/fart11.wav');
const fart12 = new Audio('assets/audio/farts/fart12.wav');
const fart13 = new Audio('assets/audio/farts/fart13.wav');
const fart14 = new Audio('assets/audio/farts/fart14.wav');
const fart15 = new Audio('assets/audio/farts/fart15.wav');

$('#3-1').click(() => {
    fart1.currentTime = 0;
    fart1.play();
});
$('#3-2').click(() => {
    fart2.currentTime = 0;
    fart2.play();
});
$('#3-3').click(() => {
    fart3.currentTime = 0;
    fart3.play();
});
$('#3-4').click(() => {
    fart4.currentTime = 0;
    fart4.play();
});
$('#3-5').click(() => {
    fart5.currentTime = 0;
    fart5.play();
});
$('#3-6').click(() => {
    fart6.currentTime = 0;
    fart6.play();
});
$('#3-7').click(() => {
    fart7.currentTime = 0;
    fart7.play();
});
$('#3-8').click(() => {
    fart8.currentTime = 0;
    fart8.play();
});
$('#3-9').click(() => {
    fart9.currentTime = 0;
    fart9.play();
});
$('#3-10').click(() => {
    fart10.currentTime = 0;
    fart10.play();
});
$('#3-11').click(() => {
    fart11.currentTime = 0;
    fart11.play();
});
$('#3-12').click(() => {
    fart12.currentTime = 0;
    fart12.play();
});
$('#3-13').click(() => {
    fart13.currentTime = 0;
    fart13.play();
});
$('#3-14').click(() => {
    fart14.currentTime = 0;
    fart14.play();
});
$('#3-15').click(() => {
    fart15.currentTime = 0;
    fart15.play();
});

$('#bank1').click(function () {
    $('#teamsBoard').css('display', 'flex');
    $('#generalBoard').css('display', 'none');
    $('#fartBoard').css('display', 'none');
    $('#bank1').addClass('smallButtonActive');
    $('#bank2').removeClass('smallButtonActive');
    $('#bank3').removeClass('smallButtonActive');
});

$('#bank2').click(function () {
    $('#generalBoard').css('display', 'flex');
    $('#teamsBoard').css('display', 'none');
    $('#fartBoard').css('display', 'none');
    $('#bank2').addClass('smallButtonActive');
    $('#bank1').removeClass('smallButtonActive');
    $('#bank3').removeClass('smallButtonActive');
});

$('#bank3').click(function () {
    $('#fartBoard').css('display', 'flex');
    $('#generalBoard').css('display', 'none');
    $('#teamsBoard').css('display', 'none');
    $('#bank3').addClass('smallButtonActive');
    $('#bank2').removeClass('smallButtonActive');
    $('#bank1').removeClass('smallButtonActive');
});