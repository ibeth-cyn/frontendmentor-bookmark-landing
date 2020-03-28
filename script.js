$(document).ready(function(){
    $(".features .features-tab").hide();
    $(".features .show").show();

    $(".features ul li").click(function(){

        $(".features ul li").removeClass("active");
        $(this).addClass("active");

        var currentTabContent = $(this).attr("data-list");
        $(".features .features-tab").hide();
        $("."+ currentTabContent).show();
    });
});