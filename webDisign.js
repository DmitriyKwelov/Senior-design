if (window.screen.width > 992) {
    const violetTrack = document.querySelector('.violet__advantages__box__shop');
    const violetItemm = document.querySelectorAll('.violet__advantages__box__item__shop')
    const violetWidthTrack = parseInt(getComputedStyle(violetItemm[0]).minWidth) + parseInt(getComputedStyle(violetItemm[0]).marginRight);

    violetItemm.forEach(item => {
        item.addEventListener('click', function (e) {
            violetItemm.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    });
    const container = document.querySelector('.container')
    const positionvioletDesk = parseInt(getComputedStyle(container).marginLeft) + 25;
    violetTrack.style.transform = `translateX(${positionvioletDesk}px)`;
    let positionNumber = positionvioletDesk;
    violetTrack.onmousedown = function (event) {
        event.preventDefault()
        const firstPoistX = event.clientX;
        let finalPosition = null;
        function onMouseMove(event) {
            let position = firstPoistX - event.clientX;
            finalPosition = positionNumber - position / 25;
            if (positionvioletDesk >= finalPosition && -((violetWidthTrack * violetItemm.length) - (innerWidth - 100)) < finalPosition) {
                console.log('fwsefwsef');
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
    const wraperViolet = document.querySelector('.violet__advantages__box__wrapper__shop');
    const trackViolet = document.querySelector('.violet__advantages__box__shop');
    const sliderItemViolet = document.querySelectorAll('.violet__advantages__box__item__shop')
    const pointsSliderViolet = document.querySelector('.points__shop')
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
        span.className = "point__shop";
        span.classList.add('point')
        if (activeSlideViolet == i) {
            span.classList.add('active');
        }
        pointsSliderViolet.append(span);
    }
    const setPointViolet = () => {
        const pointsViolet = document.querySelectorAll('.point__shop')
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
    const pointsViolet = document.querySelectorAll('.point__shop')
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
    const violetTrack = document.querySelector('.violet__advantages__box__tilda');
    const violetItemm = document.querySelectorAll('.violet__advantages__box__item__tilda')
    const violetWidthTrack = parseInt(getComputedStyle(violetItemm[0]).minWidth) + parseInt(getComputedStyle(violetItemm[0]).marginRight);

    violetItemm.forEach(item => {
        item.addEventListener('click', function (e) {
            violetItemm.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    });
    const container = document.querySelector('.container')
    const positionvioletDesk = parseInt(getComputedStyle(container).marginLeft) + 25;
    violetTrack.style.transform = `translateX(${positionvioletDesk}px)`;
    let positionNumber = positionvioletDesk;
    violetTrack.onmousedown = function (event) {
        event.preventDefault()
        const firstPoistX = event.clientX;
        let finalPosition = null;
        function onMouseMove(event) {
            let position = firstPoistX - event.clientX;
            finalPosition = positionNumber - position / 25;
            if (positionvioletDesk >= finalPosition && -((violetWidthTrack * violetItemm.length) - (innerWidth - 100)) < finalPosition) {
                console.log('fwsefwsef');
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
    let activeSlideViolet1 = 0;
    let positionViolet1 = 0;
    const wraperViolet1 = document.querySelector('.violet__advantages__box__wrapper__tilda');
    const trackViolet1 = document.querySelector('.violet__advantages__box__tilda');
    const sliderItemViolet1 = document.querySelectorAll('.violet__advantages__box__item__tilda')
    const pointsSliderViolet1 = document.querySelector('.points__tilda')
    const sliderItemLengthViolet1 = sliderItemViolet1.length
    const widthSliderViolet1 = contentWidts
    const countItemViolet1 = sliderItemViolet1.length
    sliderItemViolet1.forEach(item => {
        item.style.minWidth = `${contentWidts}px`
    });
    wraperViolet1.addEventListener('swiped-right', function (e) {
        if (positionViolet1 !== 0) {
            positionViolet1 += widthSliderViolet1;
            activeSlideViolet1 = activeSlideViolet1 - 1;
            setpositionViolet1();
            setPointViolet1();
        }
    })

    wraperViolet1.addEventListener('swiped-left', function (e) {
        if (positionViolet1 > -(countItemViolet1 * widthSliderViolet1 - widthSliderViolet1)) {
            positionViolet1 -= widthSliderViolet1;
            activeSlideViolet1 = activeSlideViolet1 + 1;
            setpositionViolet1();
            setPointViolet1();
        }
    })

    for (let i = 0; i < sliderItemLengthViolet1; i++) {
        const span = document.createElement("span");
        span.className = "point__tilda";
        span.classList.add('point')
        if (activeSlideViolet1 == i) {
            span.classList.add('active');
        }
        pointsSliderViolet1.append(span);
    }
    const setPointViolet1 = () => {
        const pointsViolet1 = document.querySelectorAll('.point__tilda')
        for (let i = 0; i < pointsViolet1.length; i++) {
            pointsViolet1[i].classList.remove('active');
            if (i == activeSlideViolet1) {
                pointsViolet1[i].classList.add('active');
            }
        }
    }
    const setpositionViolet1 = () => {
        trackViolet1.style.transform = `translateX(${positionViolet1}px)`;
    }
    const pointsViolet1 = document.querySelectorAll('.copywriting')
    pointsViolet1.forEach(pointViolet1 => {
        pointViolet1.addEventListener("click", function (e) {
            for (let i = 0; i < pointsViolet1.length; i++) {
                if (pointsViolet1[i] == pointViolet1) {
                    positionViolet1 = -(widthSliderViolet1 * i)
                    activeSlideViolet1 = i
                    trackViolet1.style.transform = `translateX(${positionViolet1}px)`;
                    setPointViolet1();
                }
            }
        })
    });
}