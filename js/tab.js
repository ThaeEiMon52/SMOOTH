
$(document).ready(function () {
    $(".tab").click(function () {
        var pageIndex = $(this).index();
        $next = $(".page").eq(pageIndex);
        $(".active-page").removeClass("active-page");
        $(".active-tab").removeClass("active-tab");
        $(this).addClass("active-tab");
        $next.addClass("active-page");
    })
})