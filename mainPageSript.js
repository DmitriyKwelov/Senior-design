// Ticker
const root = document.documentElement
const marqueeContent = document.querySelector('ul.marquee-content')
root.style.setProperty('--marquee-elements', marqueeContent.children.length)
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')
for (let index = 0; index < 4; index++) {
    marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
}

// Slider
if (window.screen.width <= 768) {
    let activeSlide = 0;
    let position = 0;
    const track = document.querySelector('.third__section__content');
    const sliderItem = document.querySelectorAll('.item')
    const wraper = document.querySelector('.wraper');
    const pointsSlider = document.querySelector('.points__slider')
    const widthSlider = wraper.clientWidth
    const countItem = sliderItem.length
    sliderItem.forEach(item => {
        item.style.minWidth = `${widthSlider}px`
    });
    wraper.addEventListener('swiped-right', function (e) {
        if (position !== 0) {
            position += widthSlider;
            activeSlide = activeSlide - 1;
            setPosition();
            setPoint();
        }
    })

    wraper.addEventListener('swiped-left', function (e) {
        if (position !== -(countItem * widthSlider - widthSlider)) {
            position -= widthSlider;
            activeSlide = activeSlide + 1;
            setPosition();
            setPoint();
        }
    })

    for (let i = 0; i < sliderItem.length; i++) {
        const span = document.createElement("span");
        span.className = "point";
        if(activeSlide == i) {
            span.classList.add('active');
        }
        pointsSlider.append(span);
      } 
    const setPoint = () => {
        const points = document.querySelectorAll('.point')
        for (let i = 0; i < points.length; i++) {
            points[i].classList.remove('active');
            if(i == activeSlide) {
                points[i].classList.add('active');
            }
        }
    }
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }
    const points = document.querySelectorAll('.point')
    points.forEach(point => {
        point.addEventListener("click", function(e) {
            for (let i = 0; i < points.length; i++) {
                if(points[i] == point){
                    position = -(widthSlider * i)
                    activeSlide = i
                    track.style.transform = `translateX(${position}px)`;
                    setPoint();
                }
            }
        }) 
    });    

}