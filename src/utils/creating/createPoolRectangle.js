import { resetPoolDrawing } from "../stylings.js";
import { makeStatisticsRectangle } from "./createStatisticsRectangle.js";
import { poolMovement } from './poolMovement.js';

const rectangleErrorMsgEl = document.querySelector('#rectangle-form p');

const poolSectionEl = document.getElementById('pool-section');

const deepDepth = document.querySelector('#size-input input[name="depth1"]');
const shallowDepth = document.querySelector('#size-input input[name="depth2"]');

export function validateRectangleForm(form) {
    let formData = new FormData(form);
    let poolWidth = parseFloat(formData.get('width'));
    let poolHeight = parseFloat(formData.get('height'));
    let poolDepth1 = parseFloat(formData.get('depth1'));
    let poolDepth2 = parseFloat(formData.get('depth2'));

    if (poolWidth >= 1 && poolHeight >= 1 && poolDepth1 > 0) {
        createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);
        makeStatisticsRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);

        rectangleErrorMsgEl.textContent = '';

        if (poolDepth2) {
            deepDepth.value = poolDepth1;
            shallowDepth.value = poolDepth2;
        } else {
            deepDepth.value = poolDepth1;
            shallowDepth.value = poolDepth1;
        }
    } else {
        if (!poolWidth) {
            rectangleErrorMsgEl.textContent = 'Enter number for width';
        } else if (!poolHeight) {
            rectangleErrorMsgEl.textContent = 'Enter number for height';
        } else if (!poolDepth1) {
            rectangleErrorMsgEl.textContent = 'Enter number for deepest point';
        }

        if (poolWidth < 1) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for width';
        } else if (poolHeight < 1) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for height';
        } else if (poolDepth1 < 0) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for deepest point';
        } else if (poolDepth2 < 0) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for the shallow point';
        }
    }
}

export function createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2) {
    resetPoolDrawing();

    let drawingWidth = poolWidth * 10;
    let drawingHeight = poolHeight * 10;
    let shortSide;

    if (poolWidth <= 10) {
        drawingWidth = poolWidth * 20;
    }
    if (poolWidth == 1) {
        drawingWidth = poolWidth * 40;
    }

    if (poolHeight <= 10) {
        drawingHeight = poolHeight * 20;
    }
    if (poolHeight == 1) {
        drawingHeight = poolHeight * 40;
    }

    if (poolWidth > 110) {
        drawingWidth = 1100;
    }
    if (poolHeight > 45) {
        drawingHeight = 450;
    }

    if (drawingWidth > drawingHeight) {
        shortSide = drawingHeight;
    } else { shortSide = drawingWidth; }

    const wrapperEl = document.createElement('div');
    wrapperEl.setAttribute('class', 'wrapper');

    const sectionEl = document.createElement('section');

    const neEl = document.createElement('div');
    neEl.setAttribute('class', 'resizer ne hover-side');
    sectionEl.appendChild(neEl);
    const nwEl = document.createElement('div');
    nwEl.setAttribute('class', 'resizer nw hover-side');
    sectionEl.appendChild(nwEl);
    const swEl = document.createElement('div');
    swEl.setAttribute('class', 'resizer sw hover-side');
    sectionEl.appendChild(swEl);
    const seEl = document.createElement('div');
    seEl.setAttribute('class', 'resizer se hover-side');
    sectionEl.appendChild(seEl);

    const circleEl = document.createElement('div');
    circleEl.setAttribute('class', 'inner-circle');
    circleEl.setAttribute('style', `width: ${shortSide}px;`);
    sectionEl.appendChild(circleEl);
    const inRadiusLineEl = document.createElement('div');
    inRadiusLineEl.setAttribute('class', 'inRadiusLine');
    circleEl.appendChild(inRadiusLineEl);


    const lineEl = document.createElement('div');
    lineEl.setAttribute('class', 'line');
    sectionEl.appendChild(lineEl);

    const areaHolderEl = document.createElement('div');
    areaHolderEl.setAttribute('class', 'area-holder');
    sectionEl.appendChild(areaHolderEl);

    wrapperEl.appendChild(sectionEl);
    poolSectionEl.appendChild(wrapperEl);

    wrapperEl.setAttribute('style', `width: ${drawingWidth}px; height: ${drawingHeight}px;`);
    poolMovement(poolDepth1, poolDepth2);
}