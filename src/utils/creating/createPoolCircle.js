import { resetPoolDrawing } from "../stylings.js";
import { makeStatisticsCircle } from "./createStatisticsCircle.js";
import { poolMovement } from "./poolMovement.js";

const circleErrorMsgEl = document.querySelector('#circle-form p');

const poolSectionEl = document.getElementById('pool-section');

const deepDepth = document.querySelector('#size-input-circle input[name="depth1"]');
const shallowDepth = document.querySelector('#size-input-circle input[name="depth2"]');

export function validateCircleForm(form) {
    let formData = new FormData(form);
    let poolDiameter = parseFloat(formData.get('diameter'));
    let poolWidth = parseFloat(formData.get('width'));
    let poolDepth1 = parseFloat(formData.get('depth1'));
    let poolDepth2 = parseFloat(formData.get('depth2'));

    if (poolDiameter >= 1 && poolWidth >= 1 && poolDepth1 > 0) {
        createPoolCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);
        makeStatisticsCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);

        circleErrorMsgEl.textContent = '';

        if (poolDepth2) {
            deepDepth.value = poolDepth1;
            shallowDepth.value = poolDepth2;
        } else {
            deepDepth.value = poolDepth1;
            shallowDepth.value = poolDepth1;
        }
    } else {
        if (!poolDiameter) {
            circleErrorMsgEl.textContent = 'Enter number for diameter';
        }
        else if (!poolWidth) {
            circleErrorMsgEl.textContent = 'Enter number for width';
        }
        else if (!poolDepth1) {
            circleErrorMsgEl.textContent = 'Enter number for deepest point';
        }

        if (poolWidth < 1) {
            circleErrorMsgEl.textContent = 'Enter valid number for width';
        } else if (poolDiameter < 1) {
            circleErrorMsgEl.textContent = 'Enter valid number for diameter';
        } else if (poolDepth1 < 0) {
            circleErrorMsgEl.textContent = 'Enter valid number for deepest point';
        } else if (poolDepth2 < 0) {
            circleErrorMsgEl.textContent = 'Enter valid number for the shallow point';
        }
    }
}

export function createPoolCircle(diameter, poolWidth, poolDepth1, poolDepth2) {
    resetPoolDrawing();

    let drawingWidth = poolWidth * 10;
    let drawingDiameter = diameter * 10;

    if (poolWidth <= 10) {
        drawingWidth = poolWidth * 20;
    }
    if (poolWidth == 1) {
        drawingWidth = poolWidth * 40;
    }

    if (diameter <= 10) {
        drawingDiameter = diameter * 20;
    }
    if (diameter == 1) {
        drawingDiameter = diameter * 40;
    }

    if (poolWidth > 110) {
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
    poolMovement(poolDepth1, poolDepth2);
}