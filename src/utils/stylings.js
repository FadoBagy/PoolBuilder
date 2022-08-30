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

    rectangleStatsBtnEl.style.display = 'table';
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
    circleStatsBtnEl.style.display = 'table';
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
    irregularStatsBtnEl.style.display = 'table';

    rectangleErrorMsgEl.textContent = '';
    circleErrorMsgEl.textContent = '';
}

export function resetPoolDrawing() {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    };
}