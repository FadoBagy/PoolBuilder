import { resetPoolDrawing } from "../stylings.js";
import { makeStatisticsTriangle } from "./createStatisticsTriangle.js";
import { poolMovement } from "./poolMovement.js";

const triangleErrorMsgEl = document.querySelector('#triangle-form p');

const poolSectionEl = document.getElementById('pool-section');


const deepDepth = document.querySelector('#size-input-triangle input[name="depth1"]');
const shallowDepth = document.querySelector('#size-input-triangle input[name="depth2"]');

export function validateTriangleForm(form) {
    let formData = new FormData(form);
    let sideA = parseFloat(formData.get('sideA'));
    let sideB = parseFloat(formData.get('sideB'));
    let sideC = parseFloat(formData.get('sideC'));
    let heightH = parseFloat(formData.get('heightH'));
    let depth1 = parseFloat(formData.get('depth1'));
    let depth2 = parseFloat(formData.get('depth2'));

    if (
        sideA >= 1 && sideA <= 100000000 &&
        sideB >= 1 && sideB <= 100000000 &&
        sideC >= 1 && sideC <= 100000000 &&
        heightH >= 1 && heightH <= 100000000 &&
        depth1 > 0 && depth1 <= 100000000 &&
        depth2 <= 100000000
    ) {
        createPoolTriangle(sideA, sideB, sideC, heightH, depth1, depth2);
        makeStatisticsTriangle(sideA, sideB, sideC, heightH, depth1, depth2);
        triangleErrorMsgEl.textContent = '';
        if (depth2) {
            deepDepth.value = depth1;
            shallowDepth.value = depth2;
        } else {
            deepDepth.value = depth1;
            shallowDepth.value = depth1;
        }
    } else {
        if (!sideA) {
            triangleErrorMsgEl.textContent = 'Enter number for side a';
        } else if (!sideB) {
            triangleErrorMsgEl.textContent = 'Enter number for side b';
        } else if (!sideC) {
            triangleErrorMsgEl.textContent = 'Enter number for side c';
        } else if (!heightH) {
            triangleErrorMsgEl.textContent = 'Enter number for height h';
        } else if (!depth1) {
            triangleErrorMsgEl.textContent = 'Enter number for deepest point';
        }

        if (sideA < 1 || sideA > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for side a';
        } else if (sideB < 1 || sideB > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for side b';
        } else if (sideC < 1 || sideC > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for side c';
        } else if (heightH < 1 || heightH > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for height h';
        } else if (depth1 < 1 || depth1 > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for deepest point';
        } else if (depth2 < 1 || depth2 > 100000000) {
            triangleErrorMsgEl.textContent = 'Enter valid number for the shallow point';
        }
    }
}

export function createPoolTriangle(sideA, sideB, sideC, heightH, depth1, depth2) {
    resetPoolDrawing();

    const wrapperEl = document.createElement('div');
    wrapperEl.setAttribute('class', 'wrapper');
    wrapperEl.setAttribute('style',
        `position: relative; top: 10px; left: 10px; border: none; width: 250px; height: 250px;`);

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('style',
        `width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: transparent;`);

    const triangleMiddleEl = document.createElement('div');
    triangleMiddleEl.setAttribute('class', 'triangle-middle');
    sectionEl.appendChild(triangleMiddleEl);
    const leftSideEl = document.createElement('div');
    leftSideEl.setAttribute('class', 'left-side');
    sectionEl.appendChild(leftSideEl);
    const rightSideEl = document.createElement('div');
    rightSideEl.setAttribute('class', 'right-side');
    sectionEl.appendChild(rightSideEl);
    const bottomSideEl = document.createElement('div');
    bottomSideEl.setAttribute('class', 'bottom-side');
    sectionEl.appendChild(bottomSideEl);

    wrapperEl.appendChild(sectionEl);
    poolSectionEl.appendChild(wrapperEl);

    poolMovement(depth1, depth2);
}