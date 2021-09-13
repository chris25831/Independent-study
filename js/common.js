//*****sidebar重整出現bug
window.addEventListener("DOMContentLoaded", function(){
  // DOM 載入完成之後
  var sidebar = document.querySelector("div.sidebar");
  sidebar.style.transition = "all 400ms ease";
});


//*****hamburger 點擊觸發
var menu_btn_el = document.getElementsByClassName("menu")[0];

menu_btn_el.addEventListener("click", function(){
  var sidebar_el = document.getElementsByClassName("sidebar")[0];
  sidebar_el.classList.toggle("-on");
  menu_btn_el.classList.toggle("-on");
});

//*****top返回
$('button.top').click(function(){
  console.log("123");
  $('html,body').animate({
    scrollTop:$('html,body,header').offset().top
  }, 800);
});



//*****News P2 點擊觸發
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



//*****Connect Q&A 點擊轉換
var qa_el = document.querySelectorAll("div.qa");
var qa_content = document.querySelectorAll("div.qa > p");
// console.log(qa_content);

for(let i=0; i < qa_el.length; i++){

  qa_el[i].addEventListener("click", function(){
    // console.log(qa_content[i].style.display == "none");
    
    if(qa_content[i].classList.contains("-on")){
      qa_content[i].style.display = "none";
      qa_content[i].classList.remove("-on");

    }else{
      qa_content[i].classList.add("-on");
      qa_content[i].style.display = "block";
    }

  });
}

