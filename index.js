//animation on scroll
AOS.init({
    duration:1000,  
});
 
$(".front-page-button").click(function() {
                                $('html,body').animate({
                                            scrollTop:$("#about").offset().top},'slow');
});
                             

//navbar sticky
window.onscroll = function() {myFunction()};

                var navbar = document.getElementById("navbar");
                var sticky = navbar.offsetTop;

                function myFunction() {
                    if (window.pageYOffset >= sticky) {
                        navbar.classList.add("sticky")
                    } else {
                        navbar.classList.remove("sticky");
                    }
                }


//form validation
  function validateForm() { 
        var x = document.forms["myForm"]["name"].value;
        var y = document.forms["myForm"]["email"].value;
        var z = document.forms["myForm"]["message"].value;
        console.log("name " +x);
        console.log("email " +y);
        console.log("message " +z);
        if ((x=="")) {
            $(".success").hide();
            $(".fail").show();
            setTimeout(location.reload.bind(location), 3000);
        }
        else
        {
            $(".success").show();
            setTimeout(location.reload.bind(location), 5000);              
        }
    }


  var close = document.getElementsByClassName("closebtn");
            var i;

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function(){
                    var div = this.parentElement;
                    div.style.opacity = "0";
                    setTimeout(function() {
                        $(".alert").fadeTo(500, 0).slideUp(500, function(){
                            $(this).remove(); 
                            document.location.reload(true);
                        });
                    }, 2000);
                }
            }
            
$(".arrow-div").on("click", function()  {
            $("body").animate({ scrollTop: 0 }, "slow");
            });
          


//skill bar 
$(document).ready(function(){
    window.onscroll = function() {myFunction()};
    $('.sidenav').sidenav();
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },2000);
    });



//front page button 
    var $button = document.querySelector('.button');
    $button.addEventListener('click', function() {
        var duration = 0.3,
            delay = 0.08;
        TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
        TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
        TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
    });


//    
//    $(window).scroll(function() {
//        var currentScroll = $(this).scrollTop();
////        console.log("-- " + ($(window).outerHeight()) + "  " + currentScroll);
//
//        if (currentScroll < $(window).outerHeight()) {
//            window.setTimeout(hideNav, 300);
//        } 
//        else {
//            window.setTimeout(showNav, 300);
//        }
//    });

    
    
//narbar converion to hamburger icon
    function hideNav() {
        $(".navbar-fixed").hide();
        
    }
    hideNav();
    function showNav() {
        $(".navbar-fixed").show();
    }
    
});