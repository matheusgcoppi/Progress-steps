const progress = document.getElementById('progress')
const preview = document.getElementById('preview')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //All because we have more than 1 class circle

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length }

        update()
})

preview.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1 }

        update()
})

function update () {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active') }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        preview.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        preview.disabled = false
        next.disabled = false
    }
}