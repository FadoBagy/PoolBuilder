export function pool() {
    const poolSection = document.querySelector('#pool-section');
    const wrapper = document.querySelector('.wrapper'),
        section = wrapper.querySelector('section');

    let isResizing = false;

    function onDrag({ movementX, movementY }) {
        if (!isResizing) {
            console.log(isResizing);
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
    }

    section.addEventListener('mousedown', () => {
        section.classList.add('active');
        poolSection.addEventListener('mousemove', onDrag);
    });

    section.addEventListener('mouseup', () => {
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
            wrapper.style.width = `${widthVal + movementX}px`;
            wrapper.style.height = `${heightVal + movementY}px`;
        }
        else if (currentResizer.classList.contains("sw")) {
            wrapper.style.width = `${widthVal - movementX}px`;
            wrapper.style.height = `${heightVal + movementY}px`;
            wrapper.style.left = `${leftVal + movementX}px`;
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
        console.log('here');
        isResizing = false;
    }
}