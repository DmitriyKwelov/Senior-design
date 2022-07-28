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