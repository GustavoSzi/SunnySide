const btn = document.querySelector('i#menuBtn');
const menu = document.querySelector('ul#menu');
const items = document.querySelectorAll('ul#menu li');

btn.addEventListener('click', () => {
    menu.classList.toggle('menuActive')
})

for (const element of items){
    element.addEventListener('click', () => {
        menu.classList.remove('menuActive')
    })
}