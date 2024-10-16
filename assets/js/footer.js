let year =  new Date().getFullYear();
let paragraph = document.querySelector('#footer-p');
let txt = `Copyright © ${year} Moments`;
paragraph.textContent = txt;