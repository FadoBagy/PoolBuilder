import { makeStatisticsRectangle } from "./createStatisticsRectangle.js";
import { poolMovement } from './poolMovement.js';

const rectangleErrorMsgEl = document.querySelector('#rectangle-form p');

const poolSectionEl = document.getElementById('pool-section');

export function validateRectangleForm(form) {
    let formData = new FormData(form);
    let poolWidth = parseFloat(formData.get('width'));
    let poolHeight = parseFloat(formData.get('height'));
    let poolDepth1 = parseFloat(formData.get('depth1'));
    let poolDepth2 = parseFloat(formData.get('depth2'));

    if (poolWidth && poolHeight && poolDepth1) {
        createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);
        form.reset();
        rectangleErrorMsgEl.textContent = '';

        makeStatisticsRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);
    } else {
        if (!poolWidth) {
            rectangleErrorMsgEl.textContent = 'Enter number for width';
        }
        else if (!poolHeight) {
            rectangleErrorMsgEl.textContent = 'Enter number for height';
        }
        else if (!poolDepth1) {
            rectangleErrorMsgEl.textContent = 'Enter number for deepest point';
        }
    }
}

export function createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2) {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    }

    let drawingWidth = poolWidth * 10;
    let drawingHeight = poolHeight * 10;

    // if (poolWidth < 4) {
    //     drawingWidth = 4 * 10;
    // }
    // if (poolHeight < 5) {
    //     drawingHeight = 4 * 10;
    // }

    // if (poolWidth > 65) {
    //     drawingWidth = 65 * 10;
    // }
    // if (poolHeight > 30) {
    //     drawingHeight = 30 * 10;
    // }

    const wrapperEl = document.createElement('div');
    wrapperEl.setAttribute('class', 'wrapper');

    const sectionEl = document.createElement('section');

    const neEl = document.createElement('div');
    neEl.setAttribute('class', 'resizer ne');
    sectionEl.appendChild(neEl);
    const nwEl = document.createElement('div');
    nwEl.setAttribute('class', 'resizer nw');
    sectionEl.appendChild(nwEl);
    const swEl = document.createElement('div');
    swEl.setAttribute('class', 'resizer sw');
    sectionEl.appendChild(swEl);
    const seEl = document.createElement('div');
    seEl.setAttribute('class', 'resizer se');
    sectionEl.appendChild(seEl);

    wrapperEl.appendChild(sectionEl);
    poolSectionEl.appendChild(wrapperEl);

    wrapperEl.setAttribute('style', `width: ${drawingWidth}px; height: ${drawingHeight}px;`);
    poolMovement();
}