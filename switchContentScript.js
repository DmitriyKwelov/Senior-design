// switch info slider

const switchInfoItem = document.querySelectorAll('.switch__info__item')
const switchableContent = document.querySelectorAll('.switchable__content')
const container = document.querySelector('.container')
const contentWidts = parseInt(getComputedStyle(container).width);

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
    const switchTrack = document.querySelector('.switch__info__track');
    const switchInfoItemm = document.querySelectorAll('.switch__info__item')
    const widthTrack = parseInt(getComputedStyle(switchInfoItemm[0]).width) + parseInt(getComputedStyle(switchInfoItemm[0]).marginRight);


    const positionSwitchInfoDesk = parseInt(getComputedStyle(container).marginLeft) + 40;
    switchTrack.style.transform = `translateX(${positionSwitchInfoDesk}px)`;
    let positionNumber = positionSwitchInfoDesk;
    switchTrack.onmousedown = function (event) {
        event.preventDefault()
        const firstPoistX = event.clientX;
        let finalPosition = null;
        function onMouseMove(event) {
            let position = firstPoistX - event.clientX;
            finalPosition = positionNumber - position / 25;
            if (positionSwitchInfoDesk >= finalPosition && -((widthTrack * switchInfoItemm.length) - window.screen.width) < finalPosition) {
                positionNumber = finalPosition
                switchTrack.style.transform = `translateX(${finalPosition}px)`;
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
    const switchTrack = document.querySelector('.switch__info__track');
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
        switchTrack.style.transform = `translateX(${positionSwitchInfo}px)`;
    }
    const points = document.querySelectorAll('.point__switch__info')
    points.forEach(point => {
        point.addEventListener("click", function (e) {
            for (let i = 0; i < points.length; i++) {
                if (points[i] == point) {
                    positionSwitchInfo = -(widthSliderSwitchInfo * i)
                    activeSlideSwitchInfo = i
                    switchTrack.style.transform = `translateX(${positionSwitchInfo}px)`;
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
