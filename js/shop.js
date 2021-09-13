//*****P1 錨點效果
$('.toggle1').click(function(){
  $('html,body,main').animate({scrollTop:$('.target1').offset().top}, 800);
});

$('.toggle2').click(function(){
  $('html,body,main').animate({scrollTop:$('.target2').offset().top}, 800);
});


//*****P2 商品促銷carousel

$('.shop_p2').slick({
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover:false,
  pauseOnFocus:false
});



//*****P3 規格品牌分類表

// 點div跳出下拉式選單，再點擊一次或框外則收回
var brand_placeholder_el = document.getElementsByClassName("placeholder")[0];
var shop_p3 = document.getElementsByClassName("shop_p3")[0];

shop_p3.addEventListener("click", function(e){

  var select_menu = document.querySelector("div.brand_select > div:nth-child(2)");

  if(e.target == brand_placeholder_el){

    if( select_menu.classList.contains("show")){

      select_menu.classList.remove("show");
      select_menu.style.visibility= "hidden";
    }else{

      select_menu.classList.add("show");
      select_menu.style.visibility= "visible";
    }
    
  }else{

    select_menu.classList.remove("show");
    select_menu.style.visibility= "hidden";
  }

})




// 選單選取
var brand_option_el = document.getElementsByClassName("brand_option");

for (let i = 0; i < brand_option_el.length; i++) {

  // 滑鼠移入
  brand_option_el[i].addEventListener("mouseenter", function(){
    // console.log("123");
    var brand_img = document.getElementsByClassName("brand_img");
    brand_img[i].style.opacity=1;

  });
  
  // 滑鼠移出
  brand_option_el[i].addEventListener("mouseleave", function(){
    var brand_img = document.getElementsByClassName("brand_img");
    brand_img[i].style.opacity=0;
  });


  // 滑鼠點擊跳出
  brand_option_el[i].addEventListener("click", function(){
    var brand_img = document.getElementsByClassName("brand_img");
    var brand_option_value = brand_option_el[i].value;
    var placeholder_value = document.querySelector("div.brand_select > div:first-child").firstElementChild;

    brand_img[i].style.opacity=1;

    // 更新span裡面文字
    placeholder_value.innerHTML = brand_option_value;

    // 關閉選單
    var select_menu = document.querySelector("div.brand_select > div:nth-child(2)");
    select_menu.classList.remove("show");
    select_menu.style.visibility= "hidden";

  });
}

// P3 重置按鈕
var cancelall_el = document.getElementsByClassName("cancelall")[0];

cancelall_el.addEventListener("click", function(){
  
  // 重置顏色
  var color_checkbox = document.querySelectorAll("div.color > div input");

  color_checkbox.forEach(function(checkbox,i){
    checkbox.checked = 0;
  });


  // 重置感光度
  var iso_select = document.getElementsByClassName("iso_select")[0];
  iso_select.selectedIndex = 0;



  // 重置規格品牌
  var brand_select = document.querySelector("div.brand_select > div > select");
  brand_select.selectedIndex = 0;
  // console.log("已完成清除");
  var placeholder_value = document.querySelector("div.brand_select > div:first-child").firstElementChild;
  placeholder_value.innerHTML = "請選擇品牌";
})

// P3 底片carousel

$('.p3_content').slick({
  dots: true,
  rows: 2,
  slidesPerRow: 5,
  responsive:[{
    breakpoint: 1200,
          settings: {
            slidesPerRow: 4,
          }
  },{
    breakpoint: 768,
    settings: {
      slidesPerRow: 2,
    }
  }
]
  
});


//*****P4 附件carousel

$('.p4_content').slick({
  dots: true,  
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive:[{
    breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
  },{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  }
]

});


