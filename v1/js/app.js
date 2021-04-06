// $(document).ready(function () {
//    $('h1').html('etiqueta h1')
//    $('#display-4').html('desde clase');
//    $('.test').html('como estas');
// })




 $(document).ready(function () {
        //cambiando el primero con el selector
        // $('.container h1:first').html('cambia de texto.');

        //Cambiando el segundo con el selector
        // $('.container h1:last').html('cambia de texto.');
        // $('h1').addClass('primary')
    // añadiendo clases con addClass
        $('#idh1').addClass('text-danger');

        //Removiendo clases con removeclass
        $('#idh1').removeClass('display-4');

        // agregando elementos en el documento con append y prepend
        $('#contenido').append('<h1>Este es un elemento al final</h1>');
        $('#contenido').prepend('<h1>Este es un elemento al principio</h1>');

        //Trabajando con los css
        $('#color-azul').css('color','blue');
        $('#color-azul').css({color: 'blue', background: 'salmon', padding: '20px'});

        //Eliminar absolutamente todo hasta del document
        // $('#color-azul').remove();



        //hidde para ocultar las cosas con posibilidad de mostar otra vez con .show()
        $('#color-azul').hide();
        $('#color-azul').show();
        
        //atrr para trabajar con atribustos
        $('img').attr('src', '/img/lograré.png');
        $('img:last').attr("width", "50")


 });