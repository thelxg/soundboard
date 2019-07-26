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
    const hg1 = new Audio();
    const hg2 = new Audio();
    const hg3 = new Audio();
    const necro1 = new Audio('assets/audio/team/necro1.mp3');
    const necro2 = new Audio('assets/audio/team/necro2.mp3');
    const necro3 = new Audio('assets/audio/team/necro3.mp3');
    const necro4 = new Audio();
    const necro5 = new Audio();
    const necro6 = new Audio();
    const necro7 = new Audio();
    const necro8 = new Audio();
    const necro9 = new Audio();
    const necro10 = new Audio();
    const necro11 = new Audio();
    const necro12 = new Audio();
    const necro13 = new Audio();
    const necro14 = new Audio();
    const necro15 = new Audio();
    const jc1 = new Audio();
    const jc2 = new Audio();
    const jc3 = new Audio();
    const cd1 = new Audio('assets/audio/team/cd1.mp3');
    const cd2 = new Audio('assets/audio/team/cd2.mp3');
    const cd3 = new Audio('assets/audio/team/cd3.mp3');
    const hp1 = new Audio();
    const hp2 = new Audio();
    const hp3 = new Audio();
    const bukkake1 = new Audio();
    const bukkake2 = new Audio();
    const bukkake3 = new Audio();
    const dv1 = new Audio('assets/audio/team/dv1.mp3');
    const dv2 = new Audio('assets/audio/team/dv2.mp3');
    const dv3 = new Audio('assets/audio/team/dv3.mp3');
    const bj1 = new Audio();
    const bj2 = new Audio();
    const bj3 = new Audio();
    const cocken1 = new Audio();
    const cocken2 = new Audio();
    const cocken3 = new Audio();
    const rbArr = [rb1, rb2, rb3];
    const hgArr = [hg1, hg2, hg3];
    const necroArr = [necro1, necro2, necro3, necro4, necro5, necro6, necro7, necro8, necro9, necro10, necro11, necro12, necro13, necro14, necro15];
    const jcArr = [jc1, jc2, jc3];
    const cdArr = [cd1, cd2, cd3];
    const hpArr = [hp1, hp2, hp3];
    const bukkakeArr = [bukkake1, bukkake2, bukkake3];
    const dvArr = [dv1, dv2, dv3];
    const bjArr = [bj1, bj2, bj3];
    const cockenArr = [cocken1, cocken2, cocken3];
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

    // $('#necros').click(() => {
    //     necroArr.forEach((song) => {
    //         song.pause();
    //         song.currentTime = 0
    //     });
    //     if (necroIndex === necroArr.length) {
    //         necroIndex = 0;
    //     };
    //     necroArr[necroIndex].play();
    //     necroIndex++
    // });

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

    const audio31 = new Audio('assets/audio/general/GOAT1.mp3');
    const audio32 = new Audio('assets/audio/general/GOAT2.mp3');
    const audio33 = new Audio('assets/audio/general/GOAT3.mp3');
    const audio34 = new Audio('assets/audio/general/GOAT6.mp3');
    const audio35 = new Audio('assets/audio/general/GOAT7.mp3');
    const audio36 = new Audio('assets/audio/general/GOAT4.mp3');
    const audio37 = new Audio('assets/audio/general/GOAT5.mp3');
    const audio38 = new Audio();
    const audio39 = new Audio();
    const audio310 = new Audio();
    const audio311 = new Audio('assets/audio/general/imthatdude.mp3');
    const audio312 = new Audio('assets/audio/general/hoe.mp3');
    const audio313 = new Audio();
    const audio314 = new Audio();
    const audio315 = new Audio();
    const goatArr = [audio31, audio32, audio33, audio34, audio35, audio36, audio37, audio38, audio39, audio310, audio311, audio312, audio313, audio314, audio315];

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
        }, 500);
    });

    $('#3-9').click(() => {
        audio39.currentTime = 0;
        audio39.play();
        $('#3-9').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-9').removeClass('yellowButtonPlaying');
        }, 500);
    });

    $('#3-10').click(() => {
        audio310.currentTime = 0;
        audio310.play();
        $('#3-10').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-10').removeClass('redButtonPlaying');
        }, 500);
    });

    $('#3-11').click(() => {
        audio311.currentTime = 0;
        audio311.play();
        $('#3-11').addClass('blueButtonPlaying');
        setTimeout(function () {
            $('#3-11').removeClass('blueButtonPlaying');
        }, 4850);
    });

    $('#3-12').click(() => {
        audio312.currentTime = 0;
        audio312.play();
        $('#3-12').addClass('purpleButtonPlaying');
        setTimeout(function () {
            $('#3-12').removeClass('purpleButtonPlaying');
        }, 9650);
    });

    $('#3-13').click(() => {
        audio313.currentTime = 0;
        audio313.play();
        $('#3-13').addClass('greenButtonPlaying');
        setTimeout(function () {
            $('#3-13').removeClass('greenButtonPlaying');
        }, 500);
    });

    $('#3-14').click(() => {
        audio314.currentTime = 0;
        audio314.play();
        $('#3-14').addClass('yellowButtonPlaying');
        setTimeout(function () {
            $('#3-14').removeClass('yellowButtonPlaying');
        }, 500);
    });

    $('#3-15').click(() => {
        audio315.currentTime = 0;
        audio315.play();
        $('#3-15').addClass('redButtonPlaying');
        setTimeout(function () {
            $('#3-15').removeClass('redButtonPlaying');
        }, 500);
    });

});