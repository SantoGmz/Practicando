$(document).ready(function () {

    let parrafo = $('#resultado p');

    $('.btn-primary').click(function () {

        parrafo.show(1000)
    })

    $('.btn-danger').click(function(){
        parrafo.hide(1000)
    })

    $('.btn-warning').click(function (){
        parrafo.toggleClass('display-4')
    })
}) 