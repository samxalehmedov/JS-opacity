let img = document.querySelectorAll('img');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let show = document.querySelector('#show');
let show2 = document.querySelector('#show2');

inp1.addEventListener('input', Border)
inp2.addEventListener('input',Goruntu)

function Border(){
    for (let i=0; i<img.length; i++){
img[i].style.borderRadius=inp1.value +'%'
    }
    localStorage.setItem('BorderRadius',inp1.value)
    show.innerHTML = localStorage.getItem('BorderRadius',inp1.value)
};

function Goruntu(){
    for (let i=0; i<img.length; i++){
        img[i].style.opacity=inp2.value
    }
    localStorage.setItem('BorderRadius2',inp2.value)
   show2.innerHTML = localStorage.getItem('BorderRadius2',inp2.value)
};

