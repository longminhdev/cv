function Home(){
    $('.nav-click').click(function(){
        let parentClass = $(this).parents('.nav-box').find('.nav-ul-mobile');

        if($(this).hasClass('active')) {  
            $(this).removeClass('active');
            parentClass.slideDown();
        }else{
            $('.nav-click').removeClass('active');
            parentClass.slideUp();
            $(this).addClass('active');
        }
    });


    $('#hamburger').click(function(){
        let parentClass = $(this).parents('.nav-box').find('.nav-ul-mobile');

        if(parentClass.hasClass('active')) {  
            parentClass.removeClass('active');
            parentClass.slideUp();
        }else{
            $('.nav-ul-mobile').removeClass('active');
            parentClass.slideDown();
            parentClass.addClass('active');
        }


    });
}
$(document).ready(function() {
    Home();
})