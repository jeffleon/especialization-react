$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');    
        }
        
    });
    $('#botonLogin').click(function(){
        $('#loginModal').modal('show')
    })
    $('#botonReserve').click(function(){
        $('#reserveModal').modal('show')
    })
    $('#reserveCancel').click(function(){
        $('#reserveModal').modal('hide')
    })
    $('#loginCancel').click(function(){
        $('#loginModal').modal('hide')
    })
});