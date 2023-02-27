new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    sectionsColor: ['#172542', '#211F30', '#39554d', '#4C0013'],
    navigationTooltips: ['Accueil', 'Projets', 'Compétences', 'Moi'],
    anchors: ['section1', 'section2', 'section3', 'section4'],
    showActiveTooltip: false,
    slidesNavigation: true,
    scrollHorizontally: false,
    slidesNavPosition: 'bottom',
    controlArrows: false,
})

const image = document.querySelector(".image"), wrapper = document.querySelector(".wrapper"), nom = document.querySelector(".nomAccueil"), shadow = document.querySelector(".nomAccueil");

if (window.innerHeight > 1000 || window.innerWidth > 1000) {
    wrapper.addEventListener("mousemove", () => {
        const y = (event.clientY - (window.innerHeight / 2));
        const x = (event.clientX - (window.innerWidth / 2));
        // Change the value of the divider for more or less parallax effect
        image.style.transform = `translate3D(${-x / 30}px, ${-y / 30}px, 0)`;
        nom.style.textShadow = `${x / 35}px ${y / 35}px 0 rgba(218, 83, 44, 0.7),${-x / 35}px ${-y / 35}px 0 rgba(0, 0, 163, 0.7)`;
    });
}



