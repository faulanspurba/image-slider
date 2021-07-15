const span      = document.querySelectorAll('span');
const product   = document.querySelectorAll('.product');

let l = 0;
const movement = 26.34, maxMove = 211;

const prev = ()=> {
    l -= movement;
        if(l <= 0) {
            l = 0;
        }
    for (const p of product) {
        p.style.left = `-${l}%`;
    }
}

const next = ()=> {
    l += movement;
        if(l >= maxMove) {
            l -= movement;
        }
    for (const p of product) {
        p.style.left = `-${l}%`
    }
}

span[0].addEventListener('click', ()=> prev());
span[1].addEventListener('click', ()=> next());