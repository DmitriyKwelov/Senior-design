if (window.screen.width <= 992) {
    let activeSlideGradien = 0;
    let positionGradien = 0;
    const wraperGradien = document.querySelector('.gradient__wrapper__slider');
    const trackGradien = document.querySelector('.logo__gradient__box');
    const sliderItemGradien = document.querySelectorAll('.gradient__box__item__logo')
    const pointsSliderGradien = document.querySelector('.points__gradient__logo')
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
        span.className = "point__gradient__logo";
        span.classList.add('point')
        if (activeSlideGradien == i) {
            span.classList.add('active');
        }
        pointsSliderGradien.append(span);
    }
    const setPointGradien = () => {
        const pointsGradien = document.querySelectorAll('.point__gradient__logo')
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
    const pointsGradien = document.querySelectorAll('.point__gradient__logo')
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
    const wraperGradien2 = document.querySelector('.gradient__wrapper__presentations');
    const trackGradien2 = document.querySelector('.presentations__gradient__box');
    const sliderItemGradien2 = document.querySelectorAll('.gradient__box__item__presentations')
    const pointsSliderGradien2 = document.querySelector('.points__gradient__presentations')
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
        span.className = "point__gradient__presentations";
        span.classList.add('point')
        if (activeSlideGradien2 == i) {
            span.classList.add('active');
        }
        pointsSliderGradien2.append(span);
    }
    const setPointGradien2 = () => {
        const pointsGradien2 = document.querySelectorAll('.point__gradient__presentations')
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
    const pointsGradien2 = document.querySelectorAll('.point__gradient__presentations')
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