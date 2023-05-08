$(document).ready(function() {
    $('.eco').hover(
        function(){
            $(this).addClass('eco');
        },
        function(){
            $(this).removeClass('eco');
        }
    )
}