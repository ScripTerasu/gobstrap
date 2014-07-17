$(document).ready(function() {

    // PROGRESO
    // vars
    var medidasTotal = 50;
    var medidasCumplidas = 7;
    var medidasAvance = Math.round(medidasCumplidas * 100 / medidasTotal);

    // %
    $('#contador .top h2 strong').text(medidasAvance + '%');

    // Indicadores
    var leftIndicadores = medidasAvance * 833 / 100;
    var widthCumplido = medidasAvance * 850 / 100;
    $('#contador .progreso .barra .indicador').css('left', leftIndicadores);
    $('#contador .progreso .barra .indicador-top').css('left', leftIndicadores);
    $('#contador .progreso .barra .cumplido').css('width', widthCumplido);

    $('a.mostrar-codigo').click(function() {
        $(this).siblings('.contenedor-codigo').slideToggle('fast');
    });
    
});