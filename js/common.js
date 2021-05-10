$('#nav .depth1 > li').hover(
    function(){
        $(this).addClass('on');
        $(this).find('.depth2').stop().slideDown(300)
    },
    function(){
        $(this).removeClass('on')
        $(this).find('.depth2').stop().slideUp(300)
    }
)