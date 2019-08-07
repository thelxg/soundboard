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
    const rb2 = new Audio('assets/audio/team/rb2.mp3');
    const rb3 = new Audio('assets/audio/team/rb3.mp3');
    const hg1 = new Audio('assets/audio/team/hg1.mp3');
    const hg2 = new Audio('assets/audio/team/hg2.mp3');
    const hg3 = new Audio('assets/audio/team/hg3.mp3');
    const hg4 = new Audio('assets/audio/team/hg4.mp3');
    const necro1 = new Audio('assets/audio/team/necro1.mp3');
    const necro3 = new Audio('assets/audio/team/necro3.mp3');
    const necro4 = new Audio('assets/audio/team/necro4.mp3');
    const necro8 = new Audio('assets/audio/team/necro8.mp3');
    const necro9 = new Audio('assets/audio/team/necro9.mp3');
    const necro10 = new Audio('assets/audio/team/necro10.mp3');
    const necro11 = new Audio('assets/audio/team/necro11.mp3');
    const necro14 = new Audio('assets/audio/team/necro14.mp3');
    const jc1 = new Audio('assets/audio/team/jc1.mp3');
    const jc2 = new Audio('assets/audio/team/jc2.mp3');
    const jc3 = new Audio('assets/audio/team/jc3.mp3');
    const jc4 = new Audio('assets/audio/team/jc4.mp3');
    const jc5 = new Audio('assets/audio/team/jc5.mp3');
    const cd1 = new Audio('assets/audio/team/cd1.mp3');
    const cd2 = new Audio('assets/audio/team/cd2.mp3');
    const cd3 = new Audio('assets/audio/team/cd3.mp3');
    const cd4 = new Audio('assets/audio/team/cd4.mp3');
    const hp1 = new Audio('assets/audio/team/hp1.mp3');
    const hp2 = new Audio('assets/audio/team/hp2.mp3');
    const hp3 = new Audio('assets/audio/team/hp3.mp3');
    const hp4 = new Audio('assets/audio/team/hp4.mp3');
    const bukkake1 = new Audio('assets/audio/team/bukkake1.mp3');
    const bukkake2 = new Audio('assets/audio/team/bukkake2.mp3');
    const bukkake3 = new Audio('assets/audio/team/bukkake3.mp3');
    const bukkake4 = new Audio('assets/audio/team/bukkake4.mp3');
    const dv1 = new Audio('assets/audio/team/dv1.mp3');
    const dv2 = new Audio('assets/audio/team/dv2.mp3');
    const dv3 = new Audio('assets/audio/team/dv3.mp3');
    const dv4 = new Audio('assets/audio/team/dv4.mp3');
    const bj1 = new Audio('assets/audio/team/bj1.mp3');
    const bj2 = new Audio('assets/audio/team/bj2.mp3');
    const bj3 = new Audio('assets/audio/team/bj3.mp3');
    const bj4 = new Audio('assets/audio/team/bj4.mp3');
    const cocken1 = new Audio('assets/audio/team/cocken1.mp3');
    const cocken2 = new Audio('assets/audio/team/cocken2.mp3');
    const cocken3 = new Audio('assets/audio/team/cocken3.mp3');
    const cocken4 = new Audio('assets/audio/team/cocken4.mp3');
    const rbArr = [rb1, rb2, rb3];
    const hgArr = [hg1, hg2, hg3, hg4];
    const necroArr = [necro4, necro3, necro8, necro1, necro10, necro9, necro11, necro14];
    const jcArr = [jc1, jc2, jc3, jc4, jc5];
    const cdArr = [cd1, cd2, cd3, cd4];
    const hpArr = [hp1, hp2, hp3, hp4];
    const bukkakeArr = [bukkake1, bukkake2, bukkake3, bukkake4];
    const dvArr = [dv1, dv2, dv3, dv4];
    const bjArr = [bj1, bj2, bj3, bj4];
    const cockenArr = [cocken1, cocken2, cocken3, cocken4];
    let rbIndex = 0;
    let hgIndex = 0;
    let necroIndex = 0;
    let jcIndex = 0;
    let cdIndex = 0;
    let hpIndex = 0;
    let bukkakeIndex = 0;
    let dvIndex = 0;
    let bjIndex = 0;
    let cockenIndex = 0;

    $('#rapebabies').click(() => {
        rbArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (rbIndex === rbArr.length) {
            rbIndex = 0;
        };
        rbArr[rbIndex].play();
        rbIndex++
    });

    $('#handGrenades').click(() => {
        hgArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (hgIndex === hgArr.length) {
            hgIndex = 0;
        };
        hgArr[hgIndex].play();
        hgIndex++
    });

    $('#necros').click(() => {
        necroArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (necroIndex === necroArr.length) {
            necroIndex = 0;
        };
        necroArr[necroIndex].play();
        necroIndex++
    });

    $('#jazzCabbage').click(() => {
        jcArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (jcIndex === jcArr.length) {
            jcIndex = 0;
        };
        jcArr[jcIndex].play();
        jcIndex++
    });

    $('#cumDumpsters').click(() => {
        cdArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (cdIndex === cdArr.length) {
            cdIndex = 0;
        };
        cdArr[cdIndex].play();
        cdIndex++
    });

    $('#hotPockets').click(() => {
        hpArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (hpIndex === hpArr.length) {
            hpIndex = 0;
        };
        hpArr[hpIndex].play();
        hpIndex++
    });

    $('#bukkake').click(() => {
        bukkakeArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (bukkakeIndex === bukkakeArr.length) {
            bukkakeIndex = 0;
        };
        bukkakeArr[bukkakeIndex].play();
        bukkakeIndex++
    });

    $('#domesticViolence').click(() => {
        dvArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (dvIndex === dvArr.length) {
            dvIndex = 0;
        };
        dvArr[dvIndex].play();
        dvIndex++
    });

    $('#buffaloJockeys').click(() => {
        bjArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (bjIndex === bjArr.length) {
            bjIndex = 0;
        };
        bjArr[bjIndex].play();
        bjIndex++
    });

    $('#cockenblockers').click(() => {
        cockenArr.forEach((song) => {
            song.pause();
            song.currentTime = 0
        });
        if (cockenIndex === cockenArr.length) {
            cockenIndex = 0;
        };
        cockenArr[cockenIndex].play();
        cockenIndex++
    });

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
        stopSound(goatArr);
        stopSound(nitbArr);
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
    const oohwee = new Audio('assets/audio/general/oohwee.mp3');

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
        oohwee.currentTime = 0;
        oohwee.play();
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

    const audio31 = new Audio('assets/audio/general/GOAT1.mp3');
    const audio32 = new Audio('assets/audio/general/GOAT2.mp3');
    const audio33 = new Audio('assets/audio/general/GOAT3.mp3');
    const audio34 = new Audio('assets/audio/general/GOAT6.mp3');
    const audio35 = new Audio('assets/audio/general/GOAT7.mp3');
    const audio36 = new Audio('assets/audio/general/GOAT4.mp3');
    const audio37 = new Audio('assets/audio/general/GOAT5.mp3');
    const audio38 = new Audio('assets/audio/general/GOAT8.mp3');
    const audio39 = new Audio('assets/audio/general/GOAT9.mp3');
    const audio310 = new Audio('assets/audio/general/GOAT10.mp3');
    const audio311 = new Audio('assets/audio/general/church.mp3');
    const audio312 = new Audio('assets/audio/general/youscared.mp3');
    const audio313 = new Audio('assets/audio/general/dinthap.mp3');
    const audio315 = new Audio('assets/audio/general/buysomestuff.mp3');
    const nitb1 = new Audio('assets/audio/general/nitb1.mp3');
    const nitb2 = new Audio('assets/audio/general/nitb2.mp3');
    const nitb3 = new Audio('assets/audio/general/nitb3.mp3');
    const nitb4 = new Audio('assets/audio/general/nitb4.mp3');
    const nitb5 = new Audio('assets/audio/general/nitb5.mp3');
    const nitb6 = new Audio('assets/audio/general/nitb6.mp3');
    const nitb7 = new Audio('assets/audio/general/nitb7.mp3');
    const nitb8 = new Audio('assets/audio/general/nitb8.mp3');
    const nitb9 = new Audio('assets/audio/general/nitb9.mp3');
    const nitb10 = new Audio('assets/audio/general/nitb10.mp3');
    const nitb11 = new Audio('assets/audio/general/nitb11.mp3');
    const nitb12 = new Audio('assets/audio/general/nitb12.mp3');
    const nitb13 = new Audio('assets/audio/general/nitb13.mp3');
    const nitb14 = new Audio('assets/audio/general/nitb14.mp3');

    const goatArr = [audio31, audio32, audio33, audio34, audio35, audio36, audio37, audio38, audio39, audio310, audio311, audio312, audio313, audio315];
    let nitbIndex = 0;
    const nitbArr = [nitb1, nitb2, nitb3, nitb4, nitb5, nitb6, nitb7, nitb8, nitb9, nitb10, nitb11, nitb12, nitb13, nitb14];

    playNitb = () => {
        if (nitbIndex === nitbArr.length) {
            nitbIndex = 0;
        }
        nitbArr[nitbIndex].currentTime = 0;
        nitbArr[nitbIndex].play();
        nitbIndex++;
    };

    $('#3-1').click(() => {
        audio31.currentTime = 0;
        audio31.play();
        $('#3-1').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-1').removeClass('blueButtonPlaying');
        }, 5900);
    });

    $('#3-2').click(() => {
        audio32.currentTime = 0;
        audio32.play();
        $('#3-2').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-2').removeClass('purpleButtonPlaying');
        }, 1350);
    });

    $('#3-3').click(() => {
        audio33.currentTime = 0;
        audio33.play();
        $('#3-3').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-3').removeClass('greenButtonPlaying');
        }, 1400);
    });

    $('#3-4').click(() => {
        audio34.currentTime = 0;
        audio34.play();
        $('#3-4').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-4').removeClass('yellowButtonPlaying');
        }, 4850);
    });

    $('#3-5').click(() => {
        audio35.currentTime = 0;
        audio35.play();
        $('#3-5').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-5').removeClass('redButtonPlaying');
        }, 5500);
    });

    $('#3-6').click(() => {
        audio36.currentTime = 0;
        audio36.play();
        $('#3-6').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-6').removeClass('blueButtonPlaying');
        }, 2550);
    });

    $('#3-7').click(() => {
        audio37.currentTime = 0;
        audio37.play();
        $('#3-7').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-7').removeClass('purpleButtonPlaying');
        }, 4500);
    });

    $('#3-8').click(() => {
        audio38.currentTime = 0;
        audio38.play();
        $('#3-8').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-8').removeClass('greenButtonPlaying');
        }, 6400);
    });

    $('#3-9').click(() => {
        audio39.currentTime = 0;
        audio39.play();
        $('#3-9').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-9').removeClass('yellowButtonPlaying');
        }, 2550);
    });

    $('#3-10').click(() => {
        audio310.currentTime = 0;
        audio310.play();
        $('#3-10').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-10').removeClass('redButtonPlaying');
        }, 2650);
    });

    $('#3-11').click(() => {
        audio311.currentTime = 0;
        audio311.play();
        $('#3-11').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-11').removeClass('blueButtonPlaying');
        }, 3500);
    });

    $('#3-12').click(() => {
        audio312.currentTime = 0;
        audio312.play();
        $('#3-12').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-12').removeClass('purpleButtonPlaying');
        }, 5400);
    });

    $('#3-13').click(() => {
        audio313.currentTime = 0;
        audio313.play();
        $('#3-13').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-13').removeClass('greenButtonPlaying');
        }, 1850);
    });

    $('#3-14').click(() => {
        playNitb();
        $('#3-14').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-14').removeClass('yellowButtonPlaying');
        }, 1800);
    });

    $('#3-15').click(() => {
        audio315.currentTime = 0;
        audio315.play();
        $('#3-15').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-15').removeClass('redButtonPlaying');
        }, 1800);
    });

});