const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const carouselImg = document.getElementById('imgs')
const imgs = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(() => {
    run()
}, (2000));

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1
    }
    carouselImg.style.transform = `translateX(-${idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000);
}