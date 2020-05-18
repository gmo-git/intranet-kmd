$(document).ready(function(){
    $('.pestana a:first').addClass('pestana-activa');
    $('.articulos article').hide();
    $('.articulos article:first').show();

    $('.pestana a').click(function(){
        $('.pestana a').removeClass('pestana-activa');
        $(this).addClass('pestana-activa');
        $('.articulos article').hide();

        var pestanaActiva = $(this).attr('href');
        $(pestanaActiva).show();
        return false;
    });
});