import { makeStatisticsCircle } from "./createStatisticsCircle.js";
import { resetPoolDrawing } from "../stylings.js";
import { poolMovement } from "./poolMovement.js";

const circleErrorMsgEl = document.querySelector('#circle-form p');
const poolSectionEl = document.getElementById('pool-section');
const deepDepthInputEl = document.querySelector('#size-input-circle input[name="depth1"]');
const shallowDepthInputEl = document.querySelector('#size-input-circle input[name="depth2"]');

export function validateCircleForm(form) {
    let formData = new FormData(form);
    let diameter = parseFloat(formData.get('diameter'));
    let width = parseFloat(formData.get('width'));
    let depthDeep = parseFloat(formData.get('depth1'));
    let depthShallow = parseFloat(formData.get('depth2'));

    if (
        diameter >= 1 && diameter <= 100000000 &&
        width >= 1 && width <= 100000000 &&
        depthDeep > 0 && depthDeep <= 100000000 &&
        depthShallow <= 100000000
    ) {
        createPoolCircle(diameter, width, depthDeep, depthShallow);
        makeStatisticsCircle(diameter, width, depthDeep, depthShallow);
        circleErrorMsgEl.textContent = '';
        if (depthShallow) {
            deepDepthInputEl.value = depthDeep;
            shallowDepthInputEl.value = depthShallow;
        } else {
            deepDepthInputEl.value = depthDeep;
            shallowDepthInputEl.value = depthDeep;
        }
    } else {
        if (!diameter) {
            circleErrorMsgEl.textContent = 'Enter number for diameter';
        } else if (!width) {
            circleErrorMsgEl.textContent = 'Enter number for width';
        } else if (!depthDeep) {
            circleErrorMsgEl.textContent = 'Enter number for deepest point';
        }

        if (width < 1 || width > 100000000) {
            circleErrorMsgEl.textContent = 'Enter valid number for width';
        } else if (diameter < 1 || diameter > 100000000) {
            circleErrorMsgEl.textContent = 'Enter valid number for diameter';
        } else if (depthDeep < 1 || depthDeep > 100000000) {
            circleErrorMsgEl.textContent = 'Enter valid number for deepest point';
        } else if (depthShallow < 1 || depthShallow > 100000000) {
            circleErrorMsgEl.textContent = 'Enter valid number for the shallow point';
        }
    }
}

export function createPoolCircle(diameter, width, depthDeep, depthShallow) {
    resetPoolDrawing();

    let drawingWidth = width * 10;
    let drawingDiameter = diameter * 10;

    if (width <= 10) {
        drawingWidth = width * 20;
    }
    if (width == 1) {
        drawingWidth = width * 40;
    }

    if (diameter <= 10) {
        drawingDiameter = diameter * 20;
    }
    if (diameter == 1) {
        drawingDiameter = diameter * 40;
    }

    if (width > 110) {
        drawingWidth = 1100;
    }
    if (diameter > 45) {
        drawingDiameter = 450;
    }

    const wrapperEl = document.createElement('div');
    wrapperEl.setAttribute('class', 'wrapper');

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'circle-radius');

    const areaHolderEl = document.createElement('div');
    areaHolderEl.setAttribute('class', 'area-holder circle-radius');
    sectionEl.appendChild(areaHolderEl);
    const diameterLine = document.createElement('div');
    diameterLine.setAttribute('class', 'diameter-circle');
    diameterLine.setAttribute('style', `display: none`);
    sectionEl.appendChild(diameterLine);
    const radiusLineHolder = document.createElement('div');
    radiusLineHolder.setAttribute('class', 'radius-circle-holder circle-radius');
    const radiusLine = document.createElement('div');
    radiusLine.setAttribute('class', 'radius-circle');
    radiusLineHolder.appendChild(radiusLine);
    sectionEl.appendChild(radiusLineHolder);

    wrapperEl.appendChild(sectionEl);
    poolSectionEl.appendChild(wrapperEl);

    wrapperEl.setAttribute('style',
        `width: ${drawingWidth}px; height: ${drawingDiameter}px; border-radius: 50% !important;`);
    poolMovement(depthDeep, depthShallow);
}