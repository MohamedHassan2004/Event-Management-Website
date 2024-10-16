let reviewsCard = document.querySelectorAll(".review-card");
let array = Array.from(reviewsCard);

let reviewRow = document.querySelector("#reviews-row");
reviewRow.innerHTML = "";
var i = 0;


let l = document.querySelector("#l");
let r = document.querySelector("#r");

if(array.length == 0){
    let noReviewsP = document.createElement('p');
    noReviewsP.innerHTML = "There's No Reviews Yet";
    noReviewsP.className = "text-center";
    reviewRow.appendChild(noReviewsP);
    l.style.display = "none";
    r.style.display = "none";   
}else if (array.length == 1){
    changeContent("+");
    l.style.display = "none";
    r.style.display = "none"; 
}
else{
    changeContent("+");
    l.addEventListener('click', ()=> changeContent("-"));
    r.addEventListener('click',()=>changeContent("+"));
}

let reviewsNo = document.querySelector('#reviews-no');
reviewsNo.innerHTML = array.length;
reviewsNo.style.color = "#0d6efd";

/**********************************************************************/

function changeContent(sign){
    reviewRow.innerHTML = "";
    if(sign == "+"){
        i = (i + 1) % array.length;
    }else{
        if(i == 0) i = array.length;
        i = (i - 1);
    }
    reviewRow.appendChild(justifiedReview(array[i]));
}

function justifiedReview(x){
    maxLen = 400;
    p = x.querySelector('p');
    tmp = p.textContent;
    if(tmp.length > maxLen){
        p.innerHTML = `${tmp.slice(0,maxLen)}...<span class = "read-more">read more</span>`;
        let readmore = p.querySelector('.read-more');
        readmore.addEventListener('click',()=> p.innerHTML = tmp);
    }
    return x;
}