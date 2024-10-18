const reviewsCard = document.querySelectorAll(".review-card");
const reviews = Array.from(reviewsCard);

const reviewRow = document.querySelector("#reviews-row");
reviewRow.innerHTML = "";
let i = 0;

const l = document.querySelector("#l");
const r = document.querySelector("#r");

if(reviews.length == 0){
    let noReviewsP = document.createElement('p');
    noReviewsP.innerHTML = "There's No Reviews Yet";
    noReviewsP.className = "text-center";
    reviewRow.appendChild(noReviewsP);
    l.style.display = "none";
    r.style.display = "none";   
}else if (reviews.length == 1){
    changeContent("+");
    l.style.display = "none";
    r.style.display = "none"; 
}else{
    changeContent("+");
    l.addEventListener('click', ()=> changeContent("-"));
    r.addEventListener('click',()=>changeContent("+"));
}

const reviewsNo = document.querySelector('#reviews-no');
reviewsNo.innerHTML = reviews.length;
reviewsNo.style.color = "#0d6efd";

/**********************************************************************/


function changeContent(sign){
    reviewRow.innerHTML = "";
    if(sign == "+"){
        i = (i + 1) % reviews.length;
    }else{
        if(i == 0) i = reviews.length;
        i = (i - 1);
    }
    justifiedReview(reviews[i])
    reviewRow.appendChild(reviews[i]);
}

function justifiedReview(x){
    let p = x.querySelector('.review-content');
    let readMore = x.querySelector('.read-more');

    p.classList.add('over-content');
    readMore.style.display = "block";

    readMore.addEventListener('click',() => {
        p.classList.remove('over-content')
        readMore.style.display = "none";
    });
}