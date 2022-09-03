export function pool() {
    const poolSection = document.querySelector('#pool-section');
    const wrapper = document.querySelector('.wrapper'),
        section = wrapper.querySelector('section');

    let isResizing = false;
    let isInsidePooSection = false;
    poolSection.addEventListener('mousemove', () => {
        isInsidePooSection = true;
    });

    function onDrag({ movementX, movementY }) {
        if (!isResizing && isInsidePooSection) {
            let getStyle = window.getComputedStyle(wrapper);
            let leftVal = parseInt(getStyle.left);
            let topVal = parseInt(getStyle.top);

            let shapeWidth = section.getBoundingClientRect().width;
            let shapeHeight = section.getBoundingClientRect().height;

            let poolSectionWidthDifference = (poolSection.getBoundingClientRect().width) - shapeWidth - 20;
            let poolSectionHeightDifference = (poolSection.getBoundingClientRect().height) - shapeHeight - 20;

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
    }

    section.addEventListener('mousedown', () => {
        section.classList.add('active');
        poolSection.addEventListener('mousemove', onDrag);
    });

    window.addEventListener('mouseup', () => {
        stopDrag();
    });

    function stopDrag() {
        section.classList.remove('active');
        poolSection.removeEventListener('mousemove', onDrag);
    }

    // Resizing
    const resizers = document.querySelectorAll(".resizer");
    let currentResizer;

    for (const resizer of resizers) {
        resizer.addEventListener('mousedown', (e) => {
            currentResizer = e.target;
            isResizing = true;

            poolSection.addEventListener("mousemove", onResize);
        });

        document.addEventListener('mouseup', () => {
            stopResize();
        });
    }

    function onResize({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let widthVal = parseInt(getStyle.width);
        let heightVal = parseInt(getStyle.height);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);

        if (currentResizer.classList.contains("se")) {
            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal + movementY}px`;
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `30px`;
            } else {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `${heightVal + movementY}px`;
            }

        }
        else if (currentResizer.classList.contains("sw")) {
            wrapper.style.width = `${widthVal - movementX}px`;
            wrapper.style.height = `${heightVal + movementY}px`;
            wrapper.style.left = `${leftVal + movementX}px`;

            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                wrapper.style.left = `${leftVal + movementX}px`;
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `30px`;
                wrapper.style.left = `${leftVal + movementX}px`;
            } else if (leftVal < 30) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                wrapper.style.left = `30px`;
            } else {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                wrapper.style.left = `${leftVal + movementX}px`;
            }
        }
        else if (currentResizer.classList.contains("ne")) {
            wrapper.style.width = `${widthVal + movementX}px`;
            wrapper.style.height = `${heightVal - movementY}px`;
            wrapper.style.top = `${topVal + movementY}px`;
        } else {
            wrapper.style.width = `${widthVal - movementX}px`;
            wrapper.style.height = `${heightVal - movementY}px`;
            wrapper.style.top = `${topVal + movementY}px`;
            wrapper.style.left = `${leftVal + movementX}px`;
        }
    }

    function stopResize() {
        poolSection.removeEventListener("mousemove", onResize);
        document.removeEventListener("mouseup", stopResize);
        isResizing = false;
    }
}