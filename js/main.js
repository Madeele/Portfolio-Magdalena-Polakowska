"use strict";

/********** On scroll move welcoming text *********/
// $(document).ready(function(){
//     $(window).scroll(function() {
//         $( ".welcoming_text" ).animate({'margin-bottom': '125%'}, 'slow');
//     });
// });

function openNav() {
    document.querySelector(".nav_opened").style.right = "0px";
};

function closeNav() {
    document.querySelector(".nav_opened").style.right = "-1000px";
};