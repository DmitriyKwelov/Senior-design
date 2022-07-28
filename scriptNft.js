const container = document.querySelector('.container')
const nftFaq = document.querySelectorAll('.nft__faq__item')
const boxNft = document.querySelectorAll('.box__work__nft')

boxNft.forEach(item => {
    item.addEventListener('click', function (e) {
        boxNft.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
});
nftFaq.forEach(item => {
    item.addEventListener('click', function (e) {
        item.classList.toggle('active')
    })
});
if (window.screen.width > 992) {
    console.log('fawefwef');
    const violetTrack = document.querySelector('.third__scection__nft__content');
    const violetItemm = document.querySelectorAll('.box__work__nft')
    const violetWidthTrack = parseInt(getComputedStyle(violetItemm[0]).minWidth) + parseInt(getComputedStyle(violetItemm[0]).marginRight);

    violetItemm.forEach(item => {
        item.addEventListener('click', function (e) {
            violetItemm.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    });
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
if (window.screen.width <= 1010) {
    let activeSlide = 0;
    let position = 0;
    const track = document.querySelector('.teem__nft');
    const sliderItem = document.querySelectorAll('.teem__nft__item')
    const wraper = document.querySelector('.wrapper__teem__nft');
    const pointsSlider = document.querySelector('.points__slider')
    const sliderItemLength = sliderItem.length / 2
    const widthSlider = wraper.clientWidth
    const countItem = sliderItem.length / 2
    sliderItem.forEach(item => {
        item.style.minWidth = `${widthSlider}px`
    });
    wraper.addEventListener('swiped-right', function (e) {
        if (position !== 0) {
            position += widthSlider;
            activeSlide = activeSlide - 1;
            setPosition();
            setPoint();
            console.log(activeSlide);
        }
    })

    wraper.addEventListener('swiped-left', function (e) {
        if (position > -(countItem * widthSlider - widthSlider)) {
            position -= widthSlider;
            activeSlide = activeSlide + 1;
            setPosition();
            setPoint();
            console.log(activeSlide);
        }
    })

    for (let i = 0; i < sliderItemLength; i++) {
        const span = document.createElement("span");
        span.className = "point";
        if (activeSlide == i) {
            span.classList.add('active');
        }
        pointsSlider.append(span);
    }
    const setPoint = () => {
        const points = document.querySelectorAll('.point')
        for (let i = 0; i < points.length; i++) {
            points[i].classList.remove('active');
            if (i == activeSlide) {
                points[i].classList.add('active');
            }
        }
    }
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }
    const points = document.querySelectorAll('.point')
    points.forEach(point => {
        point.addEventListener("click", function (e) {
            for (let i = 0; i < points.length; i++) {
                if (points[i] == point) {
                    position = -(widthSlider * i)
                    activeSlide = i
                    track.style.transform = `translateX(${position}px)`;
                    setPoint();
                }
            }
        })
    });

}
if (window.screen.width <= 1010) {
    let activeSlideWork = 0;
    let positionWork = 0;
    const trackWork = document.querySelector('.third__scection__nft__content');
    const sliderItemWork = document.querySelectorAll('.box__work__nft')
    const wraperWork = document.querySelector('.wrapper__nft__work');
    const pointsSliderWork = document.querySelector('.points__slider__nft__work')
    const sliderItemLengthWork = sliderItemWork.length
    const widthSliderWork = wraperWork.clientWidth
    const countItemWork = sliderItemWork.length
    const movePositionWork = widthSliderWork
    sliderItemWork.forEach(item => {
        item.style.minWidth = `${widthSliderWork}px`
    });
    wraperWork.addEventListener('swiped-right', function (e) {
        if (positionWork !== 0) {
            positionWork += movePositionWork;
            activeSlideWork = activeSlideWork - 1;
            setPositionWork();
            setPointWork();
        }
    })

    wraperWork.addEventListener('swiped-left', function (e) {
        if (positionWork > -(countItemWork * widthSliderWork - widthSliderWork)) {
            positionWork -= movePositionWork;
            activeSlideWork = activeSlideWork + 1;
            setPositionWork();
            setPointWork();
        }
    })

    for (let i = 0; i < sliderItemLengthWork; i++) {
        const span = document.createElement("span");
        span.className = "pointWork";
        if (activeSlideWork == i) {
            span.classList.add('active');
        }
        pointsSliderWork.append(span);
    }
    const setPointWork = () => {
        const pointsWork = document.querySelectorAll('.pointWork')
        for (let i = 0; i < pointsWork.length; i++) {
            pointsWork[i].classList.remove('active');
            if (i == activeSlideWork) {
                pointsWork[i].classList.add('active');
            }
        }
    }
    const setPositionWork = () => {
        trackWork.style.transform = `translateX(${positionWork}px)`;
    }
    const pointsWork = document.querySelectorAll('.pointWork')
    pointsWork.forEach(pointWork => {
        pointWork.addEventListener("click", function (e) {
            for (let i = 0; i < pointsWork.length; i++) {
                if (pointsWork[i] == pointWork) {
                    positionWork = -(widthSliderWork * i)
                    activeSlideWork = i
                    trackWork.style.transform = `translateX(${positionWork}px)`;
                    setPointWork();
                }
            }
        })
    });

}