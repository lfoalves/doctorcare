window.addEventListener('scroll', onScroll)

// add color on logo box with scroll ----------------------------------
function onScroll() {
    showNavScroll()
    showBackTopButton()
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2;
    // console.log(targetLine)
    //verificar se a seccao passou da linha
    //quais dados vou precisar?
    // console.log(home.offsetTop)
    // console.log(services.offsetTop)

    // topo da secao
    const sectionTop = section.offsetTop;

    // altura da secao
    const sectionHeight = section.offsetHeight;
    
    // o top da secao chegou ou pasou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // informações dos dados e da lógica
    // console.log('O topo da seção chegou ou passou da linha? ' + sectionTopReachOrPassedTargetLine)

    // verificar se a base está abaixo da linha alvo
    // dados?

    // secao termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
    
    // o final da secao passou da linha alvo?
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    // console.log('O final da seção passopu da linha alvo? ' + sectionEndPassedTargetLine)

    // limites da secao
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    } 
    // else {
    //     console.log('Sai da secao')
    // }
}

function showNavScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackTopButton() {
    if(scrollY > 550) {
        backTopButton.classList.add('show')
    } else {
        backTopButton.classList.remove('show')
    }
}


// open e close nav menu ----------------------------------------------------
const open = document.querySelector('.open-menu');
open.onclick  = function() {
    document.body.classList.add('menu-expanded')
}

const close = document.querySelector('.close-menu');
close.onclick = function() {
    document.body.classList.remove('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

// Scroll Reveal --------------------------------------------------
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,

}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about, #about header,
#about .content,
#contact,
#contact header,
#contact .content`);
