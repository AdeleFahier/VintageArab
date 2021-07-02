// Menu burger

const mainMenu = document.querySelector('ul');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
};

function close(){
    mainMenu.style.top = '-100%';
}


// scroll to top
window.addEventListener("scroll", function(){
    const scroll = document.querySelector(".scrollTop")
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}