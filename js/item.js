//*****圖片點擊切換&主圖顯示大圖

// 點擊切換
var others_img = document.querySelectorAll("div.other > div");
// console.log(others_img);


for(let i=0;i < others_img.length; i++){
   
    others_img[i].addEventListener("click", function(e){
        
        // console.log(e.target);

        // 先複製主圖
        let before_main_img = document.querySelector("div.main > img").outerHTML;
        // console.log(before_main_img);

        // 取代主圖和大圖
        let main = document.querySelector("div.main");
        let full = document.querySelector("div.full_img > div > div");
        main.innerHTML = others_img[i].innerHTML;
        full.innerHTML =  others_img[i].innerHTML;
        
        //複製主圖放回小圖 
        others_img[i].innerHTML = before_main_img;


    });
}

// 主圖顯示大圖
var main_img = document.getElementsByClassName("main")[0];
var full_img = document.getElementsByClassName("full_img")[0];

document.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.closest("div.main") == main_img){
      
        full_img.style.display = "block";
    }else if(e.target.closest("div.full_img") == full_img && full_img.style.display == "block"){

        full_img.style.display = "none";     
    }else{
       
        full_img.style.display = "none";
    }

});


//*****數量+-按鈕
var plus_el = document.getElementsByClassName("plus")[0];
var minus_el = document.getElementsByClassName("minus")[0];
var amount_input = document.querySelector("div.spec > div > input");
var stock = parseInt(document.querySelector("div.stock > span").innerText); 
var max_alert = document.querySelector("div.spec > p");

// console.log(stock);


// 上限警告
function input_check(){
    let amount = parseInt(amount_input.value); 

    if(amount >= stock){
        max_alert.style.display = "block";
    }else{
        max_alert.style.display = "none";
    }
};

// +號
plus_el.addEventListener("click", function(){
    // console.log("123");

    let amount = parseInt(amount_input.value); 
    amount ++;
    if(amount <= stock){ 

        amount_input.value = amount;
    }else{
    
        amount = stock;
        input_check();
      
    }
    
});

// -號
minus_el.addEventListener("click", function(){
    // console.log("123");

    let amount = parseInt(amount_input.value); 
    amount --;

    if(amount > 0){ 

        amount_input.value = amount;
        input_check();
    }else{

        amount = 1;
        input_check();
    }
    
});







