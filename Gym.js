$(document).ready(function(){
    $(window).on('scroll load',function(){
        if($(window).scrollTop() >60){
            $('Header').AddClass('active');
        }
            else{
        $('Header').removeClass('active');
        }
    })
})