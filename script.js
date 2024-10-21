const navlinkElements = document.querySelectorAll('.nav-link');
const sectionElements = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll',()=>{
    sectionElements.forEach(sectionElement=>{
        if(window.scrollY >= sectionElement.offsetTop){
            currentSection = sectionElement.id;
        }
    });

    navlinkElements.forEach(navlinkElement => {
        if (navlinkElement.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navlinkElement.classList.add('active');
        }
    });
});

