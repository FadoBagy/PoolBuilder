import { showResizer } from "../stylings.js";
import { makeStatisticsRectangle } from "./createStatisticsRectangle.js";

export function poolMovement(deepDepth, shallowDepth) {
    const poolSection = document.querySelector('#pool-section');
    const wrapper = document.querySelector('.wrapper');
    const section = wrapper.querySelector('section');

    showResizer();
    let isResizing = false;
    let isInsidePoolSection = false;
    poolSection.addEventListener('mousemove', () => {
        isInsidePoolSection = true;
    });

    // Dragging element
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

    function onDrag({ movementX, movementY }) {
        if (!isResizing && isInsidePoolSection) {
            let getStyle = window.getComputedStyle(wrapper);
            let leftVal = parseInt(getStyle.left);
            let topVal = parseInt(getStyle.top);

            let shapeWidth = section.getBoundingClientRect().width;
            let shapeHeight = section.getBoundingClientRect().height;
            let poolSectionWidthDifference = (poolSection.getBoundingClientRect().width) - shapeWidth - 15;
            let poolSectionHeightDifference = (poolSection.getBoundingClientRect().height) - shapeHeight - 15;

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
            else if (leftVal < 5) {
                wrapper.style.left = `5px`;
                wrapper.style.top = `${topVal + movementY}px`;
                stopDrag();
            }
            else if (topVal < 5) {
                wrapper.style.top = `5px`;
                wrapper.style.left = `${leftVal + movementX}px`;
                stopDrag();
            }
            else {
                wrapper.style.left = `${leftVal + movementX}px`;
                wrapper.style.top = `${topVal + movementY}px`;
            }
        }
    }

    // Resizing element
    const resizers = document.querySelectorAll(".resizer");
    let currentResizer;

    for (const resizer of resizers) {
        resizer.addEventListener('mousedown', (e) => {
            currentResizer = e.target;
            isResizing = true;

            poolSection.addEventListener("mousemove", onResize);
        });
        document.addEventListener('mouseup', () => {
            let getStyle = window.getComputedStyle(wrapper);
            let widthVal = parseInt(getStyle.width);
            let heightVal = parseInt(getStyle.height);

            if (widthVal && heightVal && isResizing) {
                makeStatisticsRectangle((widthVal / 10), (heightVal / 10), deepDepth, shallowDepth);
            }
            if (currentResizer) {
                currentResizer.removeAttribute('style');
            }
            for (const resizer of resizers) {
                resizer.classList.add('hover-side');
            }
            stopResize();
        });
    }

    function onResize({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let widthVal = parseInt(getStyle.width);
        let heightVal = parseInt(getStyle.height);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        let shortSide;
        let rectangleWidthInputEl = document.querySelector('#size-input input[name="width"]');
        let rectangleHeightInputEl = document.querySelector('#size-input input[name="height"]');

        for (const resizer of resizers) {
            resizer.classList.remove('hover-side');
        }
        if (widthVal > heightVal) {
            shortSide = heightVal;
        } else { shortSide = widthVal; }

        currentResizer.setAttribute('style', 'border-color: #42855B');
        document.querySelector('.inner-circle').setAttribute('style', `width: ${shortSide}px;`);

        if (rectangleWidthInputEl.value && rectangleHeightInputEl.value) {
            rectangleWidthInputEl.value = widthVal / 10;
            rectangleHeightInputEl.value = heightVal / 10;
        }

        if (currentResizer.classList.contains("se")) {
            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                // poolSection.removeEventListener("mousemove", onResize);
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `30px`;
                // poolSection.removeEventListener("mousemove", onResize);
            } else if (widthVal > 1100) {
                wrapper.style.width = `1100px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                // poolSection.removeEventListener("mousemove", onResize);
            } else if (heightVal > 450) {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `450px`;
                // poolSection.removeEventListener("mousemove", onResize);
            } else {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `${heightVal + movementY}px`;
            }
        }
        else if (currentResizer.classList.contains("sw")) {
            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal + movementY}px`;
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `30px`;
            } else if (widthVal > 1100) {
                wrapper.style.width = `1100px`;
                wrapper.style.height = `${heightVal + movementY}px`;
            } else if (heightVal > 450) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `450px`;
            } else {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `${heightVal + movementY}px`;
                if (widthVal < 1100 && widthVal > 33) {
                    wrapper.style.left = `${leftVal + movementX}px`;
                }
            }
        }
        else if (currentResizer.classList.contains("ne")) {
            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal - movementY}px`;
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `30px`;
            } else if (widthVal > 1100) {
                wrapper.style.width = `1100px`;
                wrapper.style.height = `${heightVal - movementY}px`;
            } else if (heightVal > 450) {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `450px`;
            } else {
                wrapper.style.width = `${widthVal + movementX}px`;
                wrapper.style.height = `${heightVal - movementY}px`;
                if (heightVal < 450 && heightVal > 33) {
                    wrapper.style.top = `${topVal + movementY}px`;
                }
            }
        } else {
            if (widthVal < 30) {
                wrapper.style.width = `30px`;
                wrapper.style.height = `${heightVal - movementY}px`;
            } else if (heightVal < 30) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `30px`;
            } else if (widthVal > 1100) {
                wrapper.style.width = `1100px`;
                wrapper.style.height = `${heightVal - movementY}px`;
            } else if (heightVal > 450) {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `450px`;
            } else {
                wrapper.style.width = `${widthVal - movementX}px`;
                wrapper.style.height = `${heightVal - movementY}px`;
                if (heightVal < 450 && heightVal > 33) {
                    wrapper.style.top = `${topVal + movementY}px`;
                }
                if (widthVal < 1100 && widthVal > 33) {
                    wrapper.style.left = `${leftVal + movementX}px`;
                }
            }
        }
    }

    function stopResize() {
        poolSection.removeEventListener("mousemove", onResize);
        document.removeEventListener("mouseup", stopResize);
        isResizing = false;
    }
}