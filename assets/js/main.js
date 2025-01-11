const contactBtn = document.querySelector('.contact-btn')
const washLi = document.getElementById('washLi')
const washP = document.getElementById('washP')
const walkLi = document.getElementById('walkLi')
const walkP = document.getElementById('walkP')
const manicureLi = document.getElementById('manicureLi')
const manicureP = document.getElementById('manicureP')
const daycareLi = document.getElementById('daycareLi')
const daycareP = document.getElementById('daycareP')
const moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const body = document.body

const showP = (li, p) => {
    li.addEventListener('click', () => {
        p.classList.toggle('active')
    })
}

showP(washLi, washP)
showP(walkLi, walkP)
showP(manicureLi, manicureP)
showP(daycareLi, daycareP)

moon.addEventListener('click', () => {
    body.classList.add('darkMode')
})

sun.addEventListener('click', () => {
    body.classList.remove('darkMode')
})

// Contact Button Function

contactBtn.addEventListener('click', () => {
    contactBtn.setAttribute('onclick', 'location.href = "https://wa.me/+593980703975"');
})