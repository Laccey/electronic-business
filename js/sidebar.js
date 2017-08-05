$(function () {
    // window.onscroll = function () {
    //     if(document.body.scrollTop > document.body.height){
    //         $('.backtop').show();
    //     }else{
    //         $('.backtop').hide();
    //     }
    // }
    $(window).scroll(function() {
        if($(window).scrollTop() >$(window).height()){
            $('.backtop').show();
        }else{
            $('.backtop').hide();
        }
    });
    $('.backtop').click(function () {
        $('body,html').animate({'scrollTop':'0px'},500);
    })

})