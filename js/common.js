
$(document).ready(function () {
    $('.mn-tgl').on('click', function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('is-show');
    });
});