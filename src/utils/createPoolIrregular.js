import { makeStatisticsIrregular } from "./createStatisticsIrregular.js";

const irregularErrorMsgEl = document.querySelector('#irregular-form p');

const poolSectionEl = document.getElementById('pool-section');

export function validateIrregularForm(form) {
    let formData = new FormData(form);
    let sideA = parseFloat(formData.get('sideA'));
    let sideB = parseFloat(formData.get('sideB'));
    let sideC = parseFloat(formData.get('sideC'));
    let sideD = parseFloat(formData.get('sideD'));
    let depth1 = parseFloat(formData.get('depth1'));
    let depth2 = parseFloat(formData.get('depth2'));

    if (sideA && sideB && sideC && sideD && depth1) {
        createPoolIrregular(sideA, sideB, sideC, sideD, depth1, depth2);
        form.reset();
        irregularErrorMsgEl.textContent = '';

        makeStatisticsIrregular(sideA, sideB, sideC, sideD, depth1, depth2);
    } else {
        if (!sideA) {
            irregularErrorMsgEl.textContent = 'Enter number for side a';
        }
        else if (!sideB) {
            irregularErrorMsgEl.textContent = 'Enter number for side b';
        }
        else if (!sideC) {
            irregularErrorMsgEl.textContent = 'Enter number for side c';
        }
        else if (!sideD) {
            irregularErrorMsgEl.textContent = 'Enter number for side d';
        }
        else if (!depth1) {
            irregularErrorMsgEl.textContent = 'Enter number for deepest point';
        }
    }
}

export function createPoolIrregular(sideA, sideB, sideC, sideD, depth1, depth2) {
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