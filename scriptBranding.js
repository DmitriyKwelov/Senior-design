// switch info slider

const switchInfoItem = document.querySelectorAll('.switch__info__item')
const switchableContent = document.querySelectorAll('.switchable__content')
const container = document.querySelector('.container')
const contentWidts = parseInt(getComputedStyle(container).width);
console.log(contentWidts);

if (window.screen.width > 992) {
    switchInfoItem.forEach(item => {
        item.addEventListener('click', function (e) {
            for (let i = 0; i < switchInfoItem.length; i++) {
                const element = switchInfoItem[i];
                if (element == item) {
                    setContent(i);
                }
                element.classList.remove('active')
            }
            item.classList.add('active')
        })
    });

    const setContent = (number) => {
        for (let i = 0; i < switchableContent.length; i++) {
            const element = switchableContent[i];
            if (i === number) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
    }
}
if (window.screen.width > 992) {
    const trackSwitchInfo = document.querySelector('.switch__info__track');
    const switchTrack = document.querySelector('.switch__info__track')
    const switchInfoItemm = document.querySelector('.switch__info__item')
    const widthTrack = parseInt(getComputedStyle(switchInfoItemm).width) + parseInt(getComputedStyle(switchInfoItemm).marginRight);


    const positionSwitchInfoDesk = parseInt(getComputedStyle(container).marginLeft) + 40;
    trackSwitchInfo.style.transform = `translateX(${positionSwitchInfoDesk}px)`;
    let positionNumber = positionSwitchInfoDesk;
    switchTrack.onmousedown = function (event) {
        event.preventDefault()
        const firstPoistX = event.clientX;
        let finalPosition = null;
        function onMouseMove(event) {
            let position = firstPoistX - event.clientX;
            finalPosition = positionNumber - position / 25;
            if (positionSwitchInfoDesk >= finalPosition && -((widthTrack * 6) - window.screen.width) < finalPosition) {
                positionNumber = finalPosition
                trackSwitchInfo.style.transform = `translateX(${finalPosition}px)`;
            }
        }

        switchTrack.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function () {
            switchTrack.removeEventListener('mousemove', onMouseMove);
            switchTrack.onmouseup = null;
        };
    }
}

if (window.screen.width <= 992) {
    const wraperSwitchInfo = document.querySelector('.wrapper__switch__info');
    const trackSwitchInfo = document.querySelector('.switch__info__track');
    const sliderItemSwitchInfo = document.querySelectorAll('.switch__info__item')
    const pointsSliderSwitchInfo = document.querySelector('.points__switch__info')
    const sliderItemSwitchInfoLength = sliderItemSwitchInfo.length
    const widthSliderSwitchInfo = wraperSwitchInfo.clientWidth
    const countItemSwitchInfo = sliderItemSwitchInfo.length


    let activeSlideSwitchInfo = 0;
    let positionSwitchInfo = 0;


    sliderItemSwitchInfo.forEach(item => {
        item.style.minWidth = `${widthSliderSwitchInfo}px`
    });
    wraperSwitchInfo.addEventListener('swiped-right', function (e) {
        if (positionSwitchInfo !== 0) {
            positionSwitchInfo += widthSliderSwitchInfo;
            activeSlideSwitchInfo = activeSlideSwitchInfo - 1;
            setpositionSwitchInfo();
            setPointSwitchInfo();
            setContentSwitchInfo();
        }
    })

    wraperSwitchInfo.addEventListener('swiped-left', function (e) {
        if (positionSwitchInfo > -(countItemSwitchInfo * widthSliderSwitchInfo - widthSliderSwitchInfo)) {
            positionSwitchInfo -= widthSliderSwitchInfo;
            activeSlideSwitchInfo = activeSlideSwitchInfo + 1;
            setpositionSwitchInfo();
            setPointSwitchInfo();
            setContentSwitchInfo();
        }
    })

    for (let i = 0; i < sliderItemSwitchInfoLength; i++) {
        const span = document.createElement("span");
        span.className = "point__switch__info";
        if (activeSlideSwitchInfo == i) {
            span.classList.add('active');
        }
        pointsSliderSwitchInfo.append(span);
    }
    const setPointSwitchInfo = () => {
        const points = document.querySelectorAll('.point__switch__info')
        for (let i = 0; i < points.length; i++) {
            points[i].classList.remove('active');
            if (i == activeSlideSwitchInfo) {
                points[i].classList.add('active');
            }
        }
    }
    const setpositionSwitchInfo = () => {
        trackSwitchInfo.style.transform = `translateX(${positionSwitchInfo}px)`;
    }
    const points = document.querySelectorAll('.point__switch__info')
    points.forEach(point => {
        point.addEventListener("click", function (e) {
            for (let i = 0; i < points.length; i++) {
                if (points[i] == point) {
                    positionSwitchInfo = -(widthSliderSwitchInfo * i)
                    activeSlideSwitchInfo = i
                    trackSwitchInfo.style.transform = `translateX(${positionSwitchInfo}px)`;
                    setPointSwitchInfo();
                }
            }
        })
    });
    const setContentSwitchInfo = () => {
        for (let i = 0; i < switchableContent.length; i++) {
            const element = switchableContent[i];
            if (i === activeSlideSwitchInfo) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
    }
}

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
    console.log(wraperGradien);
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
        point1.addEventListener("click", function (e) {
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