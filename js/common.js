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