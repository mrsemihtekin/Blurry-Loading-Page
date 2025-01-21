const loadText = document.querySelector('.loading-text')
const thatİsMe = document.querySelector('.that-is-me')
const bg = document.querySelector('.bg')
const images = [
    'imgs/IMG1.jpg',
    'imgs/IMG2.jpg',
    'imgs/IMG3.jpg',
    'imgs/IMG4.jpg',
]

const randomImage = images[Math.floor(Math.random() * images.length)]

bg.style.backgroundImage = `url(${randomImage})`;

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    thatİsMe.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}