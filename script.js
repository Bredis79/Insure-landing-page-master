$(function(){

    //open navigation after click on hamburger icon
    $('.hamburger').on('click', function() {
       
        $(".nav-mobile").fadeIn( 200 )
           
            $(".nav-mobile").toggle()
            $(".nav-mobile").toggle().css({"display":"flex"})
        

            $(".hamburger").toggle().css({"display":"none"})
            $(".close").toggle().css({"display":"block"})

    })
    

    //close navigation after click on the close btn
    $('.close').on('click', function() {
       
            $(".nav-mobile").toggle()
            $(".hamburger").toggle().css({"display":"block"})
            $(".close").toggle().css({"display":"none"})

    })

})


