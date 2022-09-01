const rectangleFormSectionEl = document.getElementById('rectangle-form');
const circleFormSectionEl = document.getElementById('circle-form');
const irregularFormSectionEl = document.getElementById('irregular-form');

const rectangleStatsBtnEl = document.getElementById('rectangle-stats');
const circleStatsBtnEl = document.getElementById('circle-stats');
const irregularStatsBtnEl = document.getElementById('irregular-stats');

const rectangleErrorMsgEl = document.querySelector('#rectangle-form p');
const circleErrorMsgEl = document.querySelector('#circle-form p');
const irregularErrorMsgEl = document.querySelector('#irregular-form p');

const poolSectionEl = document.getElementById('pool-section');

const shapeButtonsEl = document.querySelectorAll('#shape-select button');
const rectangleResultGeneralStatsEl = document.querySelector('#rectangle-stats .general-stats');
const rectangleResultGeometricStatsEl = document.querySelector('#rectangle-stats .geometric-stats');
const circleResultGeneralStatsEl = document.querySelector('#circle-stats .general-stats');
const circleResultGeometricStatsEl = document.querySelector('#circle-stats .geometric-stats');
const irregularResultGeneralStatsEl = document.querySelector('#irregular-stats .general-stats');
const irregularResultGeometricStatsEl = document.querySelector('#irregular-stats .geometric-stats');

export function activeStitisticsButtonsStyings(element, array) {

    if (element.classList.contains('active-stat')) {
        element.classList.remove('active-stat');
        element.setAttribute('style',
            'cursor: pointer; transition: 80ms;');
    } else {
        for (const btn of array) {
            btn.removeAttribute('style');
            btn.removeAttribute('class');
            btn.setAttribute('style',
                'cursor: pointer; transition: 80ms;');
        }

        element.classList.add('active-stat');
        element.setAttribute('style',
            'cursor: pointer; background-color: #b9c169;');
    }
}

export function removeAllActiveStitisticsButtonsStyings(array) {
    for (const btn of array) {
        btn.removeAttribute('style');
        btn.removeAttribute('class');
        btn.setAttribute('style',
            'cursor: pointer; transition: 80ms;');
    }
}

export function activePrimaryButtonsStyling(element, array) {
    if (element.type == 'submit') {
        for (const btn of array) {
            btn.removeAttribute('style');
        }
        element.setAttribute('style', 'background-color: #42855B; color: #f2f2f2;');
    }
}

export function rectangleDispayView() {
    rectangleFormSectionEl.style.display = 'block';
    circleFormSectionEl.style.display = 'none';
    irregularFormSectionEl.style.display = 'none';

    rectangleStatsBtnEl.style.display = 'flex';
    circleStatsBtnEl.style.display = 'none';
    irregularStatsBtnEl.style.display = 'none';

    circleErrorMsgEl.textContent = '';
    irregularErrorMsgEl.textContent = '';
}

export function circleDispayView() {
    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'block';
    irregularFormSectionEl.style.display = 'none';

    rectangleStatsBtnEl.style.display = 'none';
    circleStatsBtnEl.style.display = 'flex';
    irregularStatsBtnEl.style.display = 'none';

    rectangleErrorMsgEl.textContent = '';
    irregularErrorMsgEl.textContent = '';
}

export function irregularDispayView() {
    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'none';
    irregularFormSectionEl.style.display = 'block';

    rectangleStatsBtnEl.style.display = 'none';
    circleStatsBtnEl.style.display = 'none';
    irregularStatsBtnEl.style.display = 'flex';

    rectangleErrorMsgEl.textContent = '';
    circleErrorMsgEl.textContent = '';
}

export function resetPoolDrawing() {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    };
}

export function generalResultView() {
    for (const btn of shapeButtonsEl) {
        if (btn.hasAttribute("style")) {
            if (btn.textContent == 'Rectangle') {
                rectangleResultGeneralStatsEl.style.display = 'table';
                rectangleResultGeometricStatsEl.style.display = 'none';
            }
            else if (btn.textContent == 'Circle') {
                circleResultGeneralStatsEl.style.display = 'table';
                circleResultGeometricStatsEl.style.display = 'none';
            }
            else if (btn.textContent == 'Irregular Shapes') {
                irregularResultGeneralStatsEl.style.display = 'table';
                irregularResultGeometricStatsEl.style.display = 'none';
            }
            else if (btn.textContent == 'Custom') {
                console.log('not implemented - stats view changer');
            }
        }
    }
}

export function geometricResultView() {
    for (const btn of shapeButtonsEl) {
        if (btn.hasAttribute("style")) {
            if (btn.textContent == 'Rectangle') {
                rectangleResultGeneralStatsEl.style.display = 'none';
                rectangleResultGeometricStatsEl.style.display = 'table';
            }
            else if (btn.textContent == 'Circle') {
                circleResultGeneralStatsEl.style.display = 'none';
                circleResultGeometricStatsEl.style.display = 'table';
            }
            else if (btn.textContent == 'Irregular Shapes') {
                irregularResultGeneralStatsEl.style.display = 'none';
                irregularResultGeometricStatsEl.style.display = 'table';
            }
            else if (btn.textContent == 'Custom') {
                console.log('not implemented - stats view changer');
            }
        }
    }
}