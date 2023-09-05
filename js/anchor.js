$(document).ready(function () {
    //category start 

    $('.link a:nth-child(1)').addClass('active1')
    $('.link a').click(function () {
        $('.link a').removeClass('active1')
        $(this).addClass('active1')
    })

    $('.link a').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');
    });

    //category end 
})