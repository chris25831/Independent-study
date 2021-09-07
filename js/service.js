// P2 carousel
$(function(){
    var f = ".forward";
    $(f).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "ease-in-out",
        speed: 10000,
        infinite: true,
        variableWidth: true,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    // $(window).on("load", function() {
    //     $(f).slick("setPosition");
    //   });
});


$(function(){
    var r = ".reverse";
    $(r).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "ease-in-out",
        speed: 10000,
        infinite: true,
        variableWidth: true,
        pauseOnHover:false,
        pauseOnFocus:false,
        rtl: true
    });
    $(window).on("load", function() {
        $(r).slick("setPosition");
      });
});


// P2 位置定位
window.addEventListener("resize", function(){

    var service_p2 = document.getElementsByClassName("service_p2")[0];
    // console.log(service_p2);

    // 使用者視窗寬度
    var service_p2_width = service_p2["clientWidth"];

    if(service_p2_width <= 1200){
        service_p2.style.margin = "0px 0px 88px 0px";
    }else{
        service_p2.style.margin = " 0 calc(50% - 50vw) 88px";
    }
});

