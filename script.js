const iconMenu = document.querySelector('.menu__icon');
const footer = document.querySelector('footer')
const contacts = document.querySelector('.contacts')

const root = document.documentElement


const marqueeContent = document.querySelector('ul.marquee-content')


root.style.setProperty('--marquee-elements', marqueeContent.children.length)
console.log(marqueeContent.children.length);


const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')
console.log(marqueeElementsDisplayed);
console.log(marqueeElementsDisplayed.length);
for (let index = 0; index < 3; index++) {
    marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
}

if (window.screen.width <= 768) {
    let activeSlide = 0;
    let position = 0;
    const track = document.querySelector('.third__section__content');
    const sliderItem = document.querySelectorAll('.item')
    const wraper = document.querySelector('.wraper');
    const pointsSlider = document.querySelector('.points__slider')
    const widthSlider = wraper.clientWidth
    const countItem = sliderItem.length
    const movePosition = widthSlider
    sliderItem.forEach(item => {
        item.style.minWidth = `${widthSlider}px`
    });
    console.log(document.documentElement);
    wraper.addEventListener('swiped-right', function (e) {
        if (position !== 0) {
            position += movePosition;
            activeSlide = activeSlide - 1;
            setPosition();
            setPoint();
            console.log(activeSlide);
        }
    })

    wraper.addEventListener('swiped-left', function (e) {
        if (position !== -(countItem * widthSlider - widthSlider)) {
            position -= movePosition;
            activeSlide = activeSlide + 1;
            setPosition();
            setPoint();
            console.log(activeSlide);
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



if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const langMob = document.querySelector('.lang__mob')
    const body = document.querySelector('body')
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        langMob.classList.toggle('active');
        body.classList.toggle('lock');
    })
}
(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== 'function') {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    /**
     * Fires swiped event if swipe detected on touchend
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                touchType: (changedTouches[0] || {}).touchType || 'direct',
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    /**
     * Records current location on touchstart event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    /**
     * Records location diff in px on touchmove event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    /**
     * Gets attribute off HTML element or nearest parent
     * @param {object} el - HTML element to retrieve attribute from
     * @param {string} attributeName - name of the attribute
     * @param {any} defaultValue - default value to return if no match found
     * @returns {any} attribute value or defaultValue
     */
    function getNearestAttribute(el, attributeName, defaultValue) {

        // walk up the dom tree looking for attributeName
        while (el && el !== document.documentElement) {

            var attributeValue = el.getAttribute(attributeName);

            if (attributeValue) {
                return attributeValue;
            }

            el = el.parentNode;
        }

        return defaultValue;
    }

}(window, document));
// footer.addEventListener("click", function(e) {
//     contacts.classList.toggle('active');
// })
footer.addEventListener('swiped-up', function (e) {
    console.log(e.target);
    contacts.classList.add('active');
});
footer.addEventListener('swiped-down', function (e) {
    console.log(e.target);
    contacts.classList.remove('active');
});