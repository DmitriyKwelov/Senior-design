// violet witebox slider
const violetWiteBox = document.querySelectorAll('.violet__wite__box__item')
violetWiteBox.forEach(item => {
    item.addEventListener('click', function (e) {
        violetWiteBox.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
});
if (window.screen.width <= 992) {
    let activeSlide1 = 0;
    let position1 = 0;
    const wraper1 = document.querySelector('.violet__wite__box__wrapper');
    const track1 = document.querySelector('.violet__wite__box__branding__analysis');
    const sliderItem1 = document.querySelectorAll('.violet__wite__box__item')
    const pointsSlider1 = document.querySelector('.points__violet__wite__box')
    const sliderItemLength1 = sliderItem1.length
    const widthSlider1 = wraper1.clientWidth
    const countItem1 = sliderItem1.length
    sliderItem1.forEach(item => {
        item.style.minWidth = `${widthSlider1}px`
    });
    wraper1.addEventListener('swiped-right', function (e) {
        if (position1 !== 0) {
            position1 += widthSlider1;
            activeSlide1 = activeSlide1 - 1;
            setposition1();
            setPoint1();
        }
    })

    wraper1.addEventListener('swiped-left', function (e) {
        if (position1 > -(countItem1 * widthSlider1 - widthSlider1)) {
            position1 -= widthSlider1;
            activeSlide1 = activeSlide1 + 1;
            setposition1();
            setPoint1();
        }
    })

    for (let i = 0; i < sliderItemLength1; i++) {
        const span = document.createElement("span");
        span.className = "point__violet__wite";
        if (activeSlide1 == i) {
            span.classList.add('active');
        }
        pointsSlider1.append(span);
    }
    const setPoint1 = () => {
        const points1 = document.querySelectorAll('.point__violet__wite')
        for (let i = 0; i < points1.length; i++) {
            points1[i].classList.remove('active');
            if (i == activeSlide1) {
                points1[i].classList.add('active');
            }
        }
    }
    const setposition1 = () => {
        track1.style.transform = `translateX(${position1}px)`;
    }
    const points1 = document.querySelectorAll('.point__violet__wite')
    points1.forEach(point1 => {
        point1.addEventListener("click", function (e) {
            for (let i = 0; i < points1.length; i++) {
                if (points1[i] == point1) {
                    position1 = -(widthSlider1 * i)
                    activeSlide1 = i
                    track1.style.transform = `translateX(${position1}px)`;
                    setPoint1();
                }
            }
        })
    });
}

if (window.screen.width <= 992) {
    let activeSlideGradien = 0;
    let positionGradien = 0;
    const wraperGradien = document.querySelector('.wraper__gradient__box__com');
    const trackGradien = document.querySelector('.com__strategy__gradient__box');
    const sliderItemGradien = document.querySelectorAll('.gradient__box__item__com')
    const pointsSliderGradien = document.querySelector('.poinst__gradient__box')
    const sliderItemLengthGradien = sliderItemGradien.length
    const widthSliderGradien = contentWidts
    const countItemGradien = sliderItemGradien.length
    sliderItemGradien.forEach(item => {
        item.style.minWidth = `${contentWidts}px`
    });
    wraperGradien.addEventListener('swiped-right', function (e) {
        if (positionGradien !== 0) {
            positionGradien += widthSliderGradien;
            activeSlideGradien = activeSlideGradien - 1;
            setpositionGradien();
            setPointGradien();
        }
    })

    wraperGradien.addEventListener('swiped-left', function (e) {
        if (positionGradien > -(countItemGradien * widthSliderGradien - widthSliderGradien)) {
            positionGradien -= widthSliderGradien;
            activeSlideGradien = activeSlideGradien + 1;
            setpositionGradien();
            setPointGradien();
        }
    })

    for (let i = 0; i < sliderItemLengthGradien; i++) {
        const span = document.createElement("span");
        span.className = "point__gradient__box";
        span.classList.add('point')
        if (activeSlideGradien == i) {
            span.classList.add('active');
        }
        pointsSliderGradien.append(span);
    }
    const setPointGradien = () => {
        const pointsGradien = document.querySelectorAll('.point__gradient__box')
        for (let i = 0; i < pointsGradien.length; i++) {
            pointsGradien[i].classList.remove('active');
            if (i == activeSlideGradien) {
                pointsGradien[i].classList.add('active');
            }
        }
    }
    const setpositionGradien = () => {
        trackGradien.style.transform = `translateX(${positionGradien}px)`;
    }
    const pointsGradien = document.querySelectorAll('.point__gradient__box')
    pointsGradien.forEach(pointGradien => {
        pointGradien.addEventListener("click", function (e) {
            for (let i = 0; i < pointsGradien.length; i++) {
                if (pointsGradien[i] == pointGradien) {
                    positionGradien = -(widthSliderGradien * i)
                    activeSlideGradien = i
                    trackGradien.style.transform = `translateX(${positionGradien}px)`;
                    setPointGradien();
                }
            }
        })
    });

}

if (window.screen.width <= 992) {
    let activeSlideGradien2 = 0;
    let positionGradien2 = 0;
    const wraperGradien2 = document.querySelector('.wraper__gradient__box__platform');
    const trackGradien2 = document.querySelector('.platform__strategy__gradient__box');
    const sliderItemGradien2 = document.querySelectorAll('.gradient__box__item__platform')
    const pointsSliderGradien2 = document.querySelector('.poinst__gradient__platform')
    const sliderItemLengthGradien2 = sliderItemGradien2.length
    const widthSliderGradien2 = contentWidts
    const countItemGradien2 = sliderItemGradien2.length
    sliderItemGradien2.forEach(item => {
        item.style.minWidth = `${contentWidts}px`
    });
    wraperGradien2.addEventListener('swiped-right', function (e) {
        if (positionGradien2 !== 0) {
            positionGradien2 += widthSliderGradien2;
            activeSlideGradien2 = activeSlideGradien2 - 1;
            setpositionGradien2();
            setPointGradien2();
        }
    })

    wraperGradien2.addEventListener('swiped-left', function (e) {
        if (positionGradien2 > -(countItemGradien2 * widthSliderGradien2 - widthSliderGradien2)) {
            positionGradien2 -= widthSliderGradien2;
            activeSlideGradien2 = activeSlideGradien2 + 1;
            setpositionGradien2();
            setPointGradien2();
        }
    })

    for (let i = 0; i < sliderItemLengthGradien2; i++) {
        const span = document.createElement("span");
        span.className = "point__gradient__platform";
        span.classList.add('point')
        if (activeSlideGradien2 == i) {
            span.classList.add('active');
        }
        pointsSliderGradien2.append(span);
    }
    const setPointGradien2 = () => {
        const pointsGradien2 = document.querySelectorAll('.point__gradient__platform')
        for (let i = 0; i < pointsGradien2.length; i++) {
            pointsGradien2[i].classList.remove('active');
            if (i == activeSlideGradien2) {
                pointsGradien2[i].classList.add('active');
            }
        }
    }
    const setpositionGradien2 = () => {
        trackGradien2.style.transform = `translateX(${positionGradien2}px)`;
    }
    const pointsGradien2 = document.querySelectorAll('.point__gradient__platform')
    pointsGradien2.forEach(pointGradien2 => {
        pointGradien2.addEventListener("click", function (e) {
            for (let i = 0; i < pointsGradien2.length; i++) {
                if (pointsGradien2[i] == pointGradien2) {
                    positionGradien2 = -(widthSliderGradien2 * i)
                    activeSlideGradien2 = i
                    trackGradien2.style.transform = `translateX(${positionGradien2}px)`;
                    setPointGradien2();
                }
            }
        })
    });
}
if (window.screen.width > 992) {
    const violetTrack = document.querySelector('.violet__box__track__scroll');
    const violetItemm = document.querySelectorAll('.violet__box__item__scroll')
    const violetWidthTrack = parseInt(getComputedStyle(violetItemm[0]).minWidth) + parseInt(getComputedStyle(violetItemm[0]).marginRight);

    violetItemm.forEach(item => {
        item.addEventListener('click', function (e) {
            violetItemm.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    });

    const positionvioletDesk = parseInt(getComputedStyle(container).marginLeft) + 40;
    violetTrack.style.transform = `translateX(${positionvioletDesk}px)`;
    let positionNumber = positionvioletDesk;
    violetTrack.onmousedown = function (event) {
        event.preventDefault()
        const firstPoistX = event.clientX;
        let finalPosition = null;
        function onMouseMove(event) {
            let position = firstPoistX - event.clientX;
            finalPosition = positionNumber - position / 25;
            if (positionvioletDesk >= finalPosition && -((violetWidthTrack * violetItemm.length) - window.screen.width) < finalPosition) {
                positionNumber = finalPosition
                violetTrack.style.transform = `translateX(${finalPosition}px)`;
            }
        }

        violetTrack.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function () {
            violetTrack.removeEventListener('mousemove', onMouseMove);
            violetTrack.onmouseup = null;
        };
    }
}
if (window.screen.width <= 992) {
    let activeSlideViolet = 0;
    let positionViolet = 0;
    const wraperViolet = document.querySelector('.wrapper__violet__box__scroll');
    const trackViolet = document.querySelector('.violet__box__track__scroll');
    const sliderItemViolet = document.querySelectorAll('.violet__box__item__scroll')
    const pointsSliderViolet = document.querySelector('.poinst__violet')
    const sliderItemLengthViolet = sliderItemViolet.length
    const widthSliderViolet = contentWidts
    const countItemViolet = sliderItemViolet.length
    sliderItemViolet.forEach(item => {
        item.style.minWidth = `${contentWidts}px`
    });
    wraperViolet.addEventListener('swiped-right', function (e) {
        if (positionViolet !== 0) {
            positionViolet += widthSliderViolet;
            activeSlideViolet = activeSlideViolet - 1;
            setpositionViolet();
            setPointViolet();
        }
    })

    wraperViolet.addEventListener('swiped-left', function (e) {
        if (positionViolet > -(countItemViolet * widthSliderViolet - widthSliderViolet)) {
            positionViolet -= widthSliderViolet;
            activeSlideViolet = activeSlideViolet + 1;
            setpositionViolet();
            setPointViolet();
        }
    })

    for (let i = 0; i < sliderItemLengthViolet; i++) {
        const span = document.createElement("span");
        span.className = "poins__violet";
        span.classList.add('point')
        if (activeSlideViolet == i) {
            span.classList.add('active');
        }
        pointsSliderViolet.append(span);
    }
    const setPointViolet = () => {
        const pointsViolet = document.querySelectorAll('.poins__violet')
        for (let i = 0; i < pointsViolet.length; i++) {
            pointsViolet[i].classList.remove('active');
            if (i == activeSlideViolet) {
                pointsViolet[i].classList.add('active');
            }
        }
    }
    const setpositionViolet = () => {
        trackViolet.style.transform = `translateX(${positionViolet}px)`;
    }
    const pointsViolet = document.querySelectorAll('.poins__violet')
    pointsViolet.forEach(pointViolet => {
        pointViolet.addEventListener("click", function (e) {
            for (let i = 0; i < pointsViolet.length; i++) {
                if (pointsViolet[i] == pointViolet) {
                    positionViolet = -(widthSliderViolet * i)
                    activeSlideViolet = i
                    trackViolet.style.transform = `translateX(${positionViolet}px)`;
                    setPointViolet();
                }
            }
        })
    });
}
if (window.screen.width > 992) {
    const violetItemmNoScroll = document.querySelectorAll('.violet__box__item__no__scroll')

    violetItemmNoScroll.forEach(item => {
        item.addEventListener('click', function (e) {
            violetItemmNoScroll.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    });
}
if (window.screen.width <= 992) {
    let activeSlideViolet2 = 0;
    let positionViolet2 = 0;
    const wraperViolet2 = document.querySelector('.wrapper__slider__no__scroll');
    const trackViolet2 = document.querySelector('.violet__box__track__no__scroll');
    const sliderItemViolet2 = document.querySelectorAll('.violet__box__item__no__scroll')
    const pointsSliderViolet2 = document.querySelector('.points__violet__no__scroll')
    const sliderItemLengthViolet2 = sliderItemViolet2.length
    const widthSliderViolet2 = contentWidts
    const countItemViolet2 = sliderItemViolet2.length
    sliderItemViolet2.forEach(item => {
        item.style.minWidth = `${contentWidts}px`
    });
    wraperViolet2.addEventListener('swiped-right', function (e) {
        if (positionViolet2 !== 0) {
            positionViolet2 += widthSliderViolet2;
            activeSlideViolet2 = activeSlideViolet2 - 1;
            setpositionViolet2();
            setPointViolet2();
        }
    })

    wraperViolet2.addEventListener('swiped-left', function (e) {
        if (positionViolet2 > -(countItemViolet2 * widthSliderViolet2 - widthSliderViolet2)) {
            positionViolet2 -= widthSliderViolet2;
            activeSlideViolet2 = activeSlideViolet2 + 1;
            setpositionViolet2();
            setPointViolet2();
        }
    })

    for (let i = 0; i < sliderItemLengthViolet2; i++) {
        const span = document.createElement("span");
        span.className = "poins__violet2";
        span.classList.add('point')
        if (activeSlideViolet2 == i) {
            span.classList.add('active');
        }
        pointsSliderViolet2.append(span);
    }
    const setPointViolet2 = () => {
        const pointsViolet2 = document.querySelectorAll('.poins__violet2')
        for (let i = 0; i < pointsViolet2.length; i++) {
            pointsViolet2[i].classList.remove('active');
            if (i == activeSlideViolet2) {
                pointsViolet2[i].classList.add('active');
            }
        }
    }
    const setpositionViolet2 = () => {
        trackViolet2.style.transform = `translateX(${positionViolet2}px)`;
    }
    const pointsViolet2 = document.querySelectorAll('.poins__violet2')
    pointsViolet2.forEach(pointViolet2 => {
        pointViolet2.addEventListener("click", function (e) {
            for (let i = 0; i < pointsViolet2.length; i++) {
                if (pointsViolet2[i] == pointViolet2) {
                    positionViolet2 = -(widthSliderViolet2 * i)
                    activeSlideViolet2 = i
                    trackViolet2.style.transform = `translateX(${positionViolet2}px)`;
                    setPointViolet2();
                }
            }
        })
    });
}