let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// carrossel transporte

let prevButton = document.getElementById('transporte-prev')
let nextButton = document.getElementById('transporte-next')
let section = document.getElementById('transporte')
let items = section.querySelectorAll('.lista .item')
let indicator = document.querySelector('.indicadores')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length -1

function setSlider() {
    //removendo active class
    let itemOld = section.querySelector('.lista .item.active')
    itemOld.classList.remove('active')

    // indicadores

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    // troca de numero do indicador

    indicator.querySelector('.number').innerHTML = `0${active+1}`
}

nextButton.onclick = function() {
    // aplicando os valores de active
    if (active+1 > lastPosition ) {
        active = 0
    }
    else {
        active += 1
    }

    setSlider()

    // adicionando a active class
    items[active].classList.add('active')

}

prevButton.onclick = function () {
    // aplicando os valores de active
    if (active-1 < firstPosition) {
        active = lastPosition
    }
    else {
        active -= 1
    }

    setSlider()

    // adicionando a active class
    items[active].classList.add('active')

}