"use strict";

/********** On scroll move welcoming text *********/
$(document).ready(function(){
    $(window).scroll(function() {
        $( ".welcoming_text" ).animate({'margin-bottom': '550px'}, 'slow');
    });
});