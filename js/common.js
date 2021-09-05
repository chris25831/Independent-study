//sidebar重整出現bug
window.addEventListener("DOMContentLoaded", function(){
  // DOM 載入完成之後
  var sidebar = document.querySelector("div.sidebar");
  sidebar.style.transition = "all 400ms ease";
});


// hamburger 點擊觸發
var menu_btn_el = document.getElementsByClassName("menu")[0];

menu_btn_el.addEventListener("click", function(){
  var sidebar_el = document.getElementsByClassName("sidebar")[0];
  sidebar_el.classList.toggle("-on");
  menu_btn_el.classList.toggle("-on");
});



// News P2 點擊觸發
let news_p2_navbar_btn_el  = document.getElementsByClassName("tag1");

for(let i = 0; i < news_p2_navbar_btn_el.length; i++){
  news_p2_navbar_btn_el[i].addEventListener('click',function(){
    panelDisplay(this);
  });
  
};

function panelDisplay(activebtn){
  for(let i =0;i<news_p2_navbar_btn_el.length;i++){
      if(news_p2_navbar_btn_el[i] == activebtn)
      {
        news_p2_navbar_btn_el[i].classList.add("active");
      }else{
        news_p2_navbar_btn_el[i].classList.remove("active");
      }
  }
};



// Shop P3 規格品牌分類表

// 點div跳出下拉式選單
var brand_placeholder_el = document.getElementsByClassName("placeholder")[0];

brand_placeholder_el.addEventListener("click", function(){
  var select_menu = document.querySelector("div.brand_select > div:nth-child(2)");
   
  if( select_menu.classList.contains("show")){

    select_menu.classList.remove("show");
    select_menu.style.visibility= "hidden";
  }else{

    select_menu.classList.add("show");
    select_menu.style.visibility= "visible";
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

