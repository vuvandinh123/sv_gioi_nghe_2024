
const hoverTargets = {
    top: document.querySelector('#hover-top'),
    bottom: document.querySelector('#hover-bottom')
};
const backgroundTarget = document.querySelector('.inner-block');
const locationTarget = document.querySelector('#location');
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');

// variables
let position = { center: '100px -140px', top: '100px 100px', bottom: '-100px -450px' };
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
    if (activeElement === 'center') {
        updateActiveElement('top');
        setBackgroundPosition(position.top);
        setLocationClass('top');
    } else if (activeElement === 'bottom') {
        updateActiveElement('top');
        setBackgroundPosition(position.top);
        setLocationClass('top');
    }
};
const setActiveElementDow = (activeElement) => {
    if (activeElement === 'center') {
        updateActiveElement('bottom');
        setBackgroundPosition(position.bottom);
        setLocationClass('bottom');
    } else if (activeElement === 'top') {
        updateActiveElement('bottom');
        setBackgroundPosition(position.bottom);
        setLocationClass('bottom');
    }
};

// event handlers for hover
hoverTargets.top.addEventListener("mouseover", () => setTimeout(() => setActiveElementUp(activeElement), 200));
hoverTargets.top.addEventListener("mouseout", () => setTimeout(() => setActiveElementReset(), 200));
hoverTargets.bottom.addEventListener("mouseout", () => setTimeout(() =>  setActiveElementReset(),200));
hoverTargets.bottom.addEventListener("mouseover", () => setTimeout(() => setActiveElementDow(activeElement), 200));
// event handlers for click
upButton.addEventListener('click', () => setActiveElementUp(activeElement));
downButton.addEventListener('click', () => setActiveElementDow(activeElement));