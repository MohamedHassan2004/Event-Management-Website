let reviewsCard = document.querySelectorAll(".review-card");
let array = Array.from(reviewsCard);

let reviewRow = document.querySelector("#reviews-row");
reviewRow.innerHTML = "";
var i = 0;


let l = document.querySelector("#l");
let r = document.querySelector("#r");


changeContent("+");
showReview();

l.addEventListener('click', ()=> changeContent("-"));
r.addEventListener('click',()=>changeContent("+"));
/*********************************************************************8 */
function showReview(){
    changeContent("+");
    i = (i + 1) % array.length
    setTimeout("showReview()",5000);
}

function changeContent(sign){
    reviewRow.innerHTML = "";
    if(sign == "+"){
        i = (i + 1) % array.length;
    }else{
        if(i == 0) i = array.length;
        i = (i - 1);
    }
    reviewRow.appendChild(array[i]);
}
