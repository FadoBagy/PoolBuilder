import { makeStatisticsRectangle } from "./createStatisticsRectangle.js";

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

    if (poolWidth < 4) {
        drawingWidth = 4 * 10;
    }
    if (poolHeight < 5) {
        drawingHeight = 4 * 10;
    }

    if (poolWidth > 65) {
        drawingWidth = 65 * 10;
    }
    if (poolHeight > 30) {
        drawingHeight = 30 * 10;
    }

    const poolEl = document.createElement('div');
    poolEl.setAttribute('id', 'pool');
    poolEl.setAttribute('style', `width: ${drawingWidth}px; height: ${drawingHeight}px;`);

    const widthNumberEl = document.createElement('p');
    widthNumberEl.setAttribute('id', 'width-size');
    widthNumberEl.textContent = `${poolWidth} m`;
    widthNumberEl.setAttribute('style', `left: ${(drawingWidth / 2) - 22}px; bottom: 22px;`);
    poolEl.appendChild(widthNumberEl);

    const heightNumberEl = document.createElement('p');
    heightNumberEl.setAttribute('id', 'height-size');
    heightNumberEl.textContent = `${poolHeight} m`;
    heightNumberEl.setAttribute('style',
        `top: ${(drawingHeight / 2) - 37.44}px; right: 31.44px; transform: rotate(270deg);`);
    poolEl.appendChild(heightNumberEl);

    poolSectionEl.appendChild(poolEl);
}