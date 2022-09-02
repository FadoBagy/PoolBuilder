export function pool() {
    const poolSection = document.querySelector('#pool-section');
    const wrapper = document.querySelector('.wrapper'),
        div = wrapper.querySelector('div');

    function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);

        let poolSectionWidthDifference = (poolSection.getBoundingClientRect().width) - 70;
        let poolSectionHeightDifference = (poolSection.getBoundingClientRect().height) - 70;

        if (leftVal > poolSectionWidthDifference) {
            wrapper.style.left = `${poolSectionWidthDifference}px`;
            wrapper.style.top = `${topVal + movementY}px`;
            stopDrag();
        }
        else if (topVal > poolSectionHeightDifference) {
            wrapper.style.top = `${poolSectionHeightDifference}px`;
            wrapper.style.left = `${leftVal + movementX}px`;
            stopDrag();
        }
        else if (leftVal < 20) {
            wrapper.style.left = `20px`;
            wrapper.style.top = `${topVal + movementY}px`;
            stopDrag();
        }
        else if (topVal < 20) {
            wrapper.style.top = `20px`;
            wrapper.style.left = `${leftVal + movementX}px`;
            stopDrag();
        }
        else {
            wrapper.style.left = `${leftVal + movementX}px`;
            wrapper.style.top = `${topVal + movementY}px`;
        }
    }

    div.addEventListener('mousedown', () => {
        div.classList.add('active');
        poolSection.addEventListener('mousemove', onDrag);
    });

    document.addEventListener('mouseup', () => {
        stopDrag();
    });

    function stopDrag() {
        div.classList.remove('active');
        poolSection.removeEventListener('mousemove', onDrag);
    }
}