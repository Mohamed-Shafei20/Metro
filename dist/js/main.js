
      $(document).ready(function(){
        $('.totop a').click(function(e){
 
         e.preventDefault();
         $('html, body').animate({
          
           scrollTop:0
 
 
         },1000)
 
 
 
        })
         $('header .nav a').click(function(){
 
          $(this).addClass('activ').siblings().removeClass('activ');
         
 
 })
         $(window).scroll(function(){
           // navbar
           if($(this).scrollTop() > 250){
             $('.nabbar').addClass('scroll');
             $('header .moh').addClass('cont')
 
           }else{
              $('.nabbar').removeClass('scroll');
              $('header .moh').removeClass('cont');
            
           }
            // scroll to top
            if($(this).scrollTop() > 1000){
              if($('.totop').is(":hidden")){
              $('.totop').fadeIn();
              }
            }else{
             $('.totop').fadeOut()
            }
 
         })
       
       
         $('.asid-navbar .clos').click(function(){
 
          $('.asid-navbar').removeClass('scal-x');
 
         })  
         $('.nabbar .fa-bars').click(function(){
           $('.asid-navbar').addClass('scal-x')
         })
 
 
         $('.timer').countTo();
 })
//# sourceMappingURL=main.js.map
