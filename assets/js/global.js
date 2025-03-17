$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        //autres animations au lieu de slide : fade (ca passe de l'un a lautre en fade)
        direction:"vertical", //(les slide pass verticalement)
        //slideshow : true ou false ( pour que le slide soit automatique ou non)
        //slideshowSpeed : 2000 (par exemple) pour reglere le temp que reste un slide en miliseconde , par defaut il est reglé a 7 secondes
        //animationSpeed : 1000 (par exemple) la vitesse de passage d'un slide a un autre en miliseconde, par defaut a 600
        controlNav : false //pour faire disparaitre ou pas les puces  (par defaut sur true)
        //randomize : true ou false pour faire passer les slides dans un ordre au hazard (par defaut sur false)

    }); 


    $(window).scroll(function(){
        $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

});



