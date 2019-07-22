$(document).ready(function () {

    // display toggle for different banks

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

    // Bank 1 code

    const rb1 = new Audio('assets/audio/team/rb1.mp3');
    const rb2 = new Audio();
    const rb3 = new Audio();
    const hg1 = new Audio();
    const hg2 = new Audio();
    const hg3 = new Audio();
    const necro1 = new Audio('assets/audio/team/necro1.mp3');
    const necro2 = new Audio('assets/audio/team/necro2.mp3');
    const necro3 = new Audio('assets/audio/team/necro3.mp3');
    const jc1 = new Audio();
    const jc2 = new Audio();
    const jc3 = new Audio();
    const cd1 = new Audio();
    const cd2 = new Audio();
    const cd3 = new Audio();
    const hp1 = new Audio();
    const hp2 = new Audio();
    const hp3 = new Audio();
    const bukkake1 = new Audio();
    const bukkake2 = new Audio();
    const bukkake3 = new Audio();
    const dv1 = new Audio();
    const dv2 = new Audio();
    const dv3 = new Audio();
    const bj1 = new Audio();
    const bj2 = new Audio();
    const bj3 = new Audio();
    const cocken1 = new Audio();
    const cocken2 = new Audio();
    const cocken3 = new Audio();
    const rbArr = [rb1, rb2, rb3];
    const hgArr = [hg1, hg2, hg3];
    const necroArr = [necro1, necro2, necro3];
    const jcArr = [jc1, jc2, jc3];
    const cdArr = [cd1, cd2, cd3];
    const hpArr = [hp1, hp2, hp3];
    const bukkakeArr = [bukkake1, bukkake2, bukkake3];
    const dvArr = [dv1, dv2, dv3];
    const bjArr = [bj1, bj2, bj3];
    const cockenArr = [cocken1, cocken2, cocken3];

    stopSound = (arr) => {
        arr.forEach((element) => {
            element.pause();
            element.currentTime = 0;
        });
    };

    $('#stop').click(function () {
        stopSound(rbArr);
        stopSound(hgArr);
        stopSound(necroArr);
        stopSound(jcArr);
        stopSound(cdArr);
        stopSound(hpArr);
        stopSound(bukkakeArr);
        stopSound(dvArr);
        stopSound(bjArr);
        stopSound(cockenArr);
    });

    randomSound = (arr) => {
        let randomIndex = Math.floor(Math.random() * 3);
        arr.forEach(element => {
            if (element.currentTime !== 0) {
                element.pause();
                element.currentTime = 0;
            }
            else {
                arr[randomIndex].play();
            };
        });
    };

    $('#rapebabies').click(() => {
        randomSound(rbArr)
    });
    $('#handGrenades').click(() => {
        randomSound(hgArr)
    });
    $('#necros').click(() => {
        randomSound(necroArr)
    });
    $('#jazzCabbage').click(() => {
        randomSound(jcArr)
    });
    $('#cumDumpsters').click(() => {
        randomSound(cdArr)
    });
    $('#hotPockets').click(() => {
        randomSound(hpArr)
    });
    $('#bukkake').click(() => {
        randomSound(bukkakeArr)
    });
    $('#domesticViolence').click(() => {
        randomSound(dvArr)
    });
    $('#buffaloJockeys').click(() => {
        randomSound(bjArr)
    });
    $('#cockenblockers').click(() => {
        randomSound(cockenArr)
    });

    // Bank 2 code
    const airhorn = new Audio('assets/audio/general/airhorn.mp3');
    const applause = new Audio('assets/audio/general/applause.mp3');
    const kick = new Audio('assets/audio/general/kick.wav');
    const snare1 = new Audio('assets/audio/general/snare1.wav');
    const bell = new Audio('assets/audio/general/bell.wav');
    const clap = new Audio('assets/audio/general/clap.wav');
    const hihat = new Audio('assets/audio/general/hihat.wav');
    const ifyb = new Audio('assets/audio/general/IFYB.mp3');
    const hagay = new Audio('assets/audio/general/hagay.mp3');
    const tmwn = new Audio('assets/audio/general/tellmewhonext.mp3');
    const deedIt = new Audio('assets/audio/general/deedit.mp3');
    const beer = new Audio('assets/audio/general/getmebeer.mp3');
    const braaam = new Audio('assets/audio/general/braaam.mp3');
    const gavel = new Audio('assets/audio/general/gavel.mp3');
    
    let fartsIndex = 0;
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
    const farts = [fart1, fart2, fart3, fart4, fart5, fart6, fart7, fart8, fart9, fart10, fart11, fart12, fart13, fart14, fart15];

    playFarts = () => {
        if (fartsIndex === farts.length) {
            fartsIndex = 0;
        }
        farts[fartsIndex].currentTime = 0;
        farts[fartsIndex].play();
        fartsIndex++;
    };

    $('#2-1').click(() => {
        airhorn.currentTime = 0;
        airhorn.play();
        $('#2-1').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#2-1').removeClass('blueButtonPlaying');
        }, 1600);
    });
    $('#2-2').click(() => {
        applause.currentTime = 0;
        applause.play();
        $('#2-2').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#2-2').removeClass('purpleButtonPlaying');
        }, 4000);
    });
    $('#2-3').click(() => {
        braaam.currentTime = 0;
        braaam.play();
        $('#2-3').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#2-3').removeClass('greenButtonPlaying');
        }, 2950);
    });
    $('#2-4').click(() => {
        gavel.currentTime = 0;
        gavel.play();
    });
    $('#2-5').click(() => {
        playFarts();
    });
    $('#2-6').click(() => {
        ifyb.currentTime = 0;
        ifyb.play();
        $('#2-6').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#2-6').removeClass('blueButtonPlaying');
        }, 3650);

    });
    $('#2-7').click(() => {
        hagay.currentTime = 0;
        hagay.play();
        $('#2-7').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#2-7').removeClass('purpleButtonPlaying');
        }, 2600);
    });
    $('#2-8').click(() => {
        tmwn.currentTime = 0;
        tmwn.play();
        $('#2-8').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#2-8').removeClass('greenButtonPlaying');
        }, 2800);
    });
    $('#2-9').click(() => {
        deedIt.currentTime = 0;
        deedIt.play();
        $('#2-9').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#2-9').removeClass('yellowButtonPlaying');
        }, 1300);
    });
    $('#2-10').click(() => {
        beer.currentTime = 0;
        beer.play();
        $('#2-10').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#2-10').removeClass('redButtonPlaying');
        }, 1600);
    });
    $('#2-11').click(() => {
        kick.currentTime = 0;
        kick.play();
    });
    $('#2-12').click(() => {
        snare1.currentTime = 0;
        snare1.play();
    });
    $('#2-13').click(() => {
        bell.currentTime = 0;
        bell.play();
    });
    $('#2-14').click(() => {
        clap.currentTime = 0;
        clap.play();
    });
    $('#2-15').click(() => {
        hihat.currentTime = 0;
        hihat.play();
    });

    // Bank 3 code

    $('#3-1').click(() => {
        fart1.currentTime = 0;
        fart1.play();
        $('#3-1').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-1').removeClass('blueButtonPlaying');
        }, 510);
    });
    $('#3-2').click(() => {
        fart2.currentTime = 0;
        fart2.play();
        $('#3-2').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-2').removeClass('purpleButtonPlaying');
        }, 3230);
    });
    $('#3-3').click(() => {
        fart3.currentTime = 0;
        fart3.play();
        $('#3-3').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-3').removeClass('greenButtonPlaying');
        }, 900);
    });
    $('#3-4').click(() => {
        fart4.currentTime = 0;
        fart4.play();
        $('#3-4').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-4').removeClass('yellowButtonPlaying');
        }, 1550);
    });
    $('#3-5').click(() => {
        fart5.currentTime = 0;
        fart5.play();
        $('#3-5').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-5').removeClass('redButtonPlaying');
        }, 400);
    });
    $('#3-6').click(() => {
        fart6.currentTime = 0;
        fart6.play();
        $('#3-6').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-6').removeClass('blueButtonPlaying');
        }, 1280);
    });
    $('#3-7').click(() => {
        fart7.currentTime = 0;
        fart7.play();
        $('#3-7').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-7').removeClass('purpleButtonPlaying');
        }, 1750);
    });
    $('#3-8').click(() => {
        fart8.currentTime = 0;
        fart8.play();
        $('#3-8').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-8').removeClass('greenButtonPlaying');
        }, 1558);
    });
    $('#3-9').click(() => {
        fart9.currentTime = 0;
        fart9.play();
        $('#3-9').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-9').removeClass('yellowButtonPlaying');
        }, 1320);
    });
    $('#3-10').click(() => {
        fart10.currentTime = 0;
        fart10.play();
        $('#3-10').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-10').removeClass('redButtonPlaying');
        }, 400);
    });
    $('#3-11').click(() => {
        fart11.currentTime = 0;
        fart11.play();
        $('#3-11').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-11').removeClass('blueButtonPlaying');
        }, 1450);
    });
    $('#3-12').click(() => {
        fart12.currentTime = 0;
        fart12.play();
        $('#3-12').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-12').removeClass('purpleButtonPlaying');
        }, 1050);
    });
    $('#3-13').click(() => {
        fart13.currentTime = 0;
        fart13.play();
        $('#3-13').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-13').removeClass('greenButtonPlaying');
        }, 920);
    });
    $('#3-14').click(() => {
        fart14.currentTime = 0;
        fart14.play();
        $('#3-14').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-14').removeClass('yellowButtonPlaying');
        }, 1070);
    });
    $('#3-15').click(() => {
        fart15.currentTime = 0;
        fart15.play();
        $('#3-15').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-15').removeClass('redButtonPlaying');
        }, 2450);
    });

});