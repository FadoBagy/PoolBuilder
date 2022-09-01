import { makeStatisticsTriangle } from "./createStatisticsTriangle.js";

const triangleErrorMsgEl = document.querySelector('#triangle-form p');

const poolSectionEl = document.getElementById('pool-section');

export function validateTriangleForm(form) {
    let formData = new FormData(form);
    let sideA = parseFloat(formData.get('sideA'));
    let sideB = parseFloat(formData.get('sideB'));
    let sideC = parseFloat(formData.get('sideC'));
    let heightH = parseFloat(formData.get('heightH'));
    let depth1 = parseFloat(formData.get('depth1'));
    let depth2 = parseFloat(formData.get('depth2'));

    if (sideA && sideB && sideC && heightH && depth1) {
        createPoolTriangle(sideA, sideB, sideC, heightH, depth1, depth2);
        form.reset();
        triangleErrorMsgEl.textContent = '';

        makeStatisticsTriangle(sideA, sideB, sideC, heightH, depth1, depth2);
    } else {
        if (!sideA) {
            triangleErrorMsgEl.textContent = 'Enter number for side a';
        }
        else if (!sideB) {
            triangleErrorMsgEl.textContent = 'Enter number for side b';
        }
        else if (!sideC) {
            triangleErrorMsgEl.textContent = 'Enter number for side c';
        }
        else if (!heightH) {
            triangleErrorMsgEl.textContent = 'Enter number for height h';
        }
        else if (!depth1) {
            triangleErrorMsgEl.textContent = 'Enter number for deepest point';
        }
    }
}

export function createPoolTriangle(sideA, sideB, sideC, heightH, depth1, depth2) {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    }

    const poolEl = document.createElement('div');
    poolEl.setAttribute('id', 'pool');
    poolEl.setAttribute('style', `width: 50px; height: 50px;`);

    const pEl = document.createElement('p');
    pEl.textContent = 'TEST';
    poolEl.appendChild(pEl);

    poolSectionEl.appendChild(poolEl);
}