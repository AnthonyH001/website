const star = document.querySelector('.star')
const stars = document.querySelector('.stars')
const stara = document.querySelector('.star a')
const user = document.querySelector('.user')
const namea = document.querySelector('.namecontainer')

let counter = 0
let counter2 = 0
star.addEventListener('click', () => {
    if (counter == 0) {
        stars.classList.add('active')
        stara.classList.remove('fa-beat')
        star.classList.add('active')
        namea.classList.remove('active')
        counter++
    }
    else {
        stars.classList.remove('active')
        stara.classList.add('fa-beat')
        star.classList.remove('active')
        namea.classList.remove('active')
        counter--
    }
})
user.addEventListener('click', () => {
    if (counter2 == 0) {
        namea.classList.add('active')
        console.log('%d', counter2)
        counter2++
    }
    else {
        namea.classList.remove('active')
        console.log('%d', counter2)
        counter2--
    }
})

