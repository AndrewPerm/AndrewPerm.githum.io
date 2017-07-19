$(function() {

    $(".nav-collapse li").click(function ( e ) {
        e.preventDefault();
        $(".nav-collapse li.active").removeClass("active"); //Remove any "active" class
        $("li", this).addClass("active"); //Add "active" class to selected tab

        // $(activeTab).show(); //Fade in the active content
    });
});
