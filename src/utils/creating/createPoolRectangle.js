import { makeStatisticsRectangle } from "./createStatisticsRectangle.js";
import { resetPoolDrawing } from "../stylings.js";
import { poolMovement } from './poolMovement.js';

const rectangleErrorMsgEl = document.querySelector('#rectangle-form p');
const poolSectionEl = document.getElementById('pool-section');
const deepDepthInputEl = document.querySelector('#size-input input[name="depth1"]');
const shallowDepthInputEl = document.querySelector('#size-input input[name="depth2"]');

export function validateRectangleForm(form) {
    let formData = new FormData(form);
    let width = parseFloat(formData.get('width'));
    let height = parseFloat(formData.get('height'));
    let depthDeep = parseFloat(formData.get('depth1'));
    let depthShallow = parseFloat(formData.get('depth2'));

    if (
        width >= 1 && width <= 100000000 &&
        height >= 1 && height <= 100000000 &&
        depthDeep > 0 && depthDeep <= 100000000 &&
        depthShallow <= 100000000
    ) {
        createPoolRectangle(width, height, depthDeep, depthShallow);
        makeStatisticsRectangle(width, height, depthDeep, depthShallow);
        rectangleErrorMsgEl.textContent = '';
        if (depthShallow) {
            deepDepthInputEl.value = depthDeep;
            shallowDepthInputEl.value = depthShallow;
        } else {
            deepDepthInputEl.value = depthDeep;
            shallowDepthInputEl.value = depthDeep;
        }
    } else {
        if (!width) {
            rectangleErrorMsgEl.textContent = 'Enter number for width';
        } else if (!height) {
            rectangleErrorMsgEl.textContent = 'Enter number for height';
        } else if (!depthDeep) {
            rectangleErrorMsgEl.textContent = 'Enter number for deepest point';
        }

        if (width < 1 || width > 100000000) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for width';
        } else if (height < 1 || height > 100000000) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for height';
        } else if (depthDeep < 1 || depthDeep > 100000000) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for deepest point';
        } else if (depthShallow < 1 || depthShallow > 100000000) {
            rectangleErrorMsgEl.textContent = 'Enter valid number for the shallow point';
        }
    }
}

export function createPoolRectangle(width, height, depthDeep, depthShallow) {
    resetPoolDrawing();

    let drawingWidth = width * 10;
    let drawingHeight = height * 10;
    let shortSide;

    if (width <= 10) {
        drawingWidth = width * 20;
    }
    if (width == 1) {
        drawingWidth = width * 40;
    }

    if (height <= 10) {
        drawingHeight = height * 20;
    }
    if (height == 1) {
        drawingHeight = height * 40;
    }

    if (width > 110) {
        drawingWidth = 1100;
    }
    if (height > 45) {
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
    poolMovement(depthDeep, depthShallow);
}