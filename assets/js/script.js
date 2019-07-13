$('#bank1').click(function() {
    $('#teamsBoard').css('display', 'flex');
    $('#generalBoard').css('display', 'none');
    $('#fartBoard').css('display', 'none');
});

$('#bank2').click(function() {
    $('#generalBoard').css('display', 'flex');
    $('#teamsBoard').css('display', 'none');
    $('#fartBoard').css('display', 'none');
});

$('#bank3').click(function() {
    $('#fartBoard').css('display', 'flex');
    $('#generalBoard').css('display', 'none');
    $('#teamsBoard').css('display', 'none');
});