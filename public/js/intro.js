
const hoverTargets = {
    top: document.querySelector('#hover-top'),
    bottom: document.querySelector('#hover-bottom')
};
const backgroundTarget = document.querySelector('.inner-block');
const locationTarget = document.querySelector('#location');
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');

// variables
let position = { center: 'left 0 center', top: 'top left 0px', bottom: 'bottom right 0' };
let activeElement = 'center';

const setBackgroundPosition = (position) => backgroundTarget.style.backgroundPosition = position

const setLocationClass = (className) => locationTarget.className = className;

const updateActiveElement = (newElement) => activeElement = newElement;

const setActiveElementReset = () => {
    updateActiveElement('center');
    setBackgroundPosition(position.center);
    setLocationClass('center');
};
const setActiveElementUp = (activeElement) => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // if (width < 767) {
    //     if (activeElement === 'center') {
    //         updateActiveElement('top');
    //         setBackgroundPosition("top right -190px");
    //         setLocationClass('topMobi');
    //     } else if (activeElement === 'bottom') {
    //         updateActiveElement('center');
    //         setBackgroundPosition("left -200px center");
    //         setLocationClass("centerMobi")
    //     }
    //     console.log("vo");
    // }
    // else {
    if (activeElement === 'center') {
        updateActiveElement('top');
        setBackgroundPosition(position.top);
        setLocationClass('top');
    } else if (activeElement === 'bottom') {
        updateActiveElement('top');
        setBackgroundPosition(position.top);
        setLocationClass('top');
    }
    // }



};
const setActiveElementDow = (activeElement) => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width < 767) {
        if (activeElement === 'center') {
            updateActiveElement('bottom');
            setBackgroundPosition("bottom right -190px");
            setLocationClass('bottomMobi');
        } else if (activeElement === 'top') {
            updateActiveElement('bottom');
            setBackgroundPosition("bottom right -190px");
            setLocationClass('bottomMobi');
        }
        console.log("vo");
    }
    else {
        if (activeElement === 'center') {
            updateActiveElement('bottom');
            setBackgroundPosition(position.bottom);
            setLocationClass('bottom');
        } else if (activeElement === 'top') {
            updateActiveElement('bottom');
            setBackgroundPosition(position.bottom);
            setLocationClass('bottom');
        }
    }

};

// event handlers for hover
hoverTargets.top.addEventListener("mouseover", () => setTimeout(() => setActiveElementUp(activeElement), 200));
hoverTargets.top.addEventListener("mouseout", () => setTimeout(() => setActiveElementReset(), 200));
hoverTargets.bottom.addEventListener("mouseout", () => setTimeout(() => setActiveElementReset(), 200));
hoverTargets.bottom.addEventListener("mouseover", () => setTimeout(() => setActiveElementDow(activeElement), 200));
// event handlers for click
upButton.addEventListener('click', () => setActiveElementUp(activeElement));
downButton.addEventListener('click', () => setActiveElementDow(activeElement));
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (width < 767) {
    if (activeElement === 'center') {
        console.log("hello");
        setBackgroundPosition("left -200px center");
        setLocationClass("centerMobi")
    } else if (activeElement === 'bottom') {
        setBackgroundPosition("bottom right -190px");
        setLocationClass("bottomMobi")

    } else if (activeElement === 'top') {
        setBackgroundPosition("top right -190px");
        setLocationClass("topMobi")
    }
}
else {
    setActiveElementReset();
}
window.addEventListener("resize", function () {
    // Lấy kích thước màn hình sau khi thay đổi
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width < 767) {
        if (activeElement === 'center') {
            setBackgroundPosition("left -230px center");
            setLocationClass("centerMobi")
        } else if (activeElement === 'bottom') {
            setBackgroundPosition("bottom right -190px");
            setLocationClass("bottomMobi")

        } else if (activeElement === 'top') {
            setBackgroundPosition("top right -190px");
            setLocationClass("topMobi")
        }
    }
    else {
        // backgroundTarget.style.backgroundPosition = "top left 0px";
        setActiveElementReset();
    }

});