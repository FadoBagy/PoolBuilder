const rectangleFormSectionEl = document.getElementById('rectangle-form');
const circleFormSectionEl = document.getElementById('circle-form');
const triangleFormSectionEl = document.getElementById('triangle-form');

const rectangleStatsBtnEl = document.getElementById('rectangle-stats');
const circleStatsBtnEl = document.getElementById('circle-stats');
const triangleStatsBtnEl = document.getElementById('triangle-stats');

const rectangleErrorMsgEl = document.querySelector('#rectangle-form p');
const circleErrorMsgEl = document.querySelector('#circle-form p');
const triangleErrorMsgEl = document.querySelector('#triangle-form p');

const poolSectionEl = document.getElementById('pool-section');

const shapeButtonsEl = document.querySelectorAll('#shape-select button');
const rectangleResultGeneralStatsEl = document.querySelector('#rectangle-stats .general-stats');
const rectangleResultGeometricStatsEl = document.querySelector('#rectangle-stats .geometric-stats');
const circleResultGeneralStatsEl = document.querySelector('#circle-stats .general-stats');
const circleResultGeometricStatsEl = document.querySelector('#circle-stats .geometric-stats');
const triangleResultGeneralStatsEl = document.querySelector('#triangle-stats .general-stats');
const triangleResultGeometricStatsEl = document.querySelector('#triangle-stats .geometric-stats');

const resizersEl = document.querySelectorAll('.resizer');

const rectangleIconsEl = document.querySelector('.rectangle-icons');
const circleIconsEl = document.querySelector('.circle-icons');
const triangleIconsEl = document.querySelector('.triangle-icons');

const poolWrapperEl = document.querySelector('.wrapper');

export function activeStitisticsButtonsStyings(element, array) {
    if (element.classList.contains('active-stat')) {
        element.classList.remove('active-stat');
        element.setAttribute('style',
            'cursor: pointer; transition: 80ms;');

        removeIconsStyle();
    } else {
        for (const btn of array) {
            btn.removeAttribute('style');
            btn.removeAttribute('class');
            btn.setAttribute('style',
                'cursor: pointer; transition: 80ms;');

            removeIconsStyle();
        }

        element.classList.add('active-stat');
        element.setAttribute('style',
            'cursor: pointer; background-color: #b9c169;');

        addIconsStyle(element);
    }
}

function addIconsStyle(element) {
    if (element.parentElement.parentElement.parentElement.id == 'rectangle-stats') {
        if (element.children[0].textContent == 'Perimeter') {
            document.querySelector('.wrapper').classList.add('active-stat-border');
            document.querySelector('.rectangle-icons img[alt="perimeter"]').classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Surface area') {
            document.querySelector('.area-holder').classList.add('active-stat-area');
            document.querySelector('.rectangle-icons img[alt="area"]').classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Volume') {
            document.querySelector('.rectangle-icons img[alt="volume"]').classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Liters') {
            document.querySelector('.rectangle-icons img[alt="liters"]').classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Diagonal') {
            document.querySelector('.line').classList.add('active-stat-line');
            document.querySelector('.rectangle-icons img[alt="diagonal"]').classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Inradius') {
            document.querySelector('.inner-circle').classList.add('active-stat-border');
            document.querySelector('.inRadiusLine').classList.add('active-stat-background');
            document.querySelector('.rectangle-icons img[alt="radius"]').classList.add('active-pool-icons-img');
        }
    } else if (element.parentElement.parentElement.parentElement.id == 'circle-stats') {
        // if (element.children[0].textContent == 'Perimeter') {
        //     document.querySelector('.wrapper').classList.add('active-stat-border');
        //     document.querySelector('.circle-icons img[alt="perimeter"]').classList.add('active-pool-icons-img');
        // } else if (element.children[0].textContent == 'Surface area') {
        //     document.querySelector('.area-holder').classList.add('active-stat-area');
        //     document.querySelector('.circle-icons img[alt="area"]').classList.add('active-pool-icons-img');
        // } else if (element.children[0].textContent == 'Volume') {
        //     document.querySelector('.circle-icons img[alt="volume"]').classList.add('active-pool-icons-img');
        // } else if (element.children[0].textContent == 'Liters') {
        //     document.querySelector('.circle-icons img[alt="liters"]').classList.add('active-pool-icons-img');
        // } else if (element.children[0].textContent == 'Radius') {
        //     // Implement
        // } else if (element.children[0].textContent == 'Diameter') {
        //     // Implement
        // }
    } else if (element.parentElement.parentElement.parentElement.id == 'triangle-stats') {

    }
}

function removeIconsStyle() {
    document.querySelector('.wrapper').classList.remove("active-stat-border");
    document.querySelector('.area-holder').classList.remove("active-stat-area");
    document.querySelector('.line').classList.remove('active-stat-line');
    document.querySelector('.inner-circle').classList.remove('active-stat-border');
    document.querySelector('.inRadiusLine').classList.remove('active-stat-background');
    document.querySelector('.rectangle-icons img[alt="perimeter"]').classList.remove('active-pool-icons-img');
    document.querySelector('.rectangle-icons img[alt="area"]').classList.remove('active-pool-icons-img');
    document.querySelector('.rectangle-icons img[alt="volume"]').classList.remove('active-pool-icons-img');
    document.querySelector('.rectangle-icons img[alt="liters"]').classList.remove('active-pool-icons-img');
    document.querySelector('.rectangle-icons img[alt="diagonal"]').classList.remove('active-pool-icons-img');
    document.querySelector('.rectangle-icons img[alt="radius"]').classList.remove('active-pool-icons-img');
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
    triangleFormSectionEl.style.display = 'none';

    rectangleStatsBtnEl.style.display = 'flex';
    circleStatsBtnEl.style.display = 'none';
    triangleStatsBtnEl.style.display = 'none';

    rectangleIconsEl.style.display = 'block';
    circleIconsEl.style.display = 'none';
    triangleIconsEl.style.display = 'none';

    circleErrorMsgEl.textContent = '';
    triangleErrorMsgEl.textContent = '';
}

export function circleDispayView() {
    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'block';
    triangleFormSectionEl.style.display = 'none';

    rectangleStatsBtnEl.style.display = 'none';
    circleStatsBtnEl.style.display = 'flex';
    triangleStatsBtnEl.style.display = 'none';

    rectangleIconsEl.style.display = 'none';
    circleIconsEl.style.display = 'block';
    triangleIconsEl.style.display = 'none';

    rectangleErrorMsgEl.textContent = '';
    triangleErrorMsgEl.textContent = '';
}

export function triangleDispayView() {
    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'none';
    triangleFormSectionEl.style.display = 'block';

    rectangleStatsBtnEl.style.display = 'none';
    circleStatsBtnEl.style.display = 'none';
    triangleStatsBtnEl.style.display = 'flex';

    rectangleIconsEl.style.display = 'none';
    circleIconsEl.style.display = 'none';
    triangleIconsEl.style.display = 'block';

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
            else if (btn.textContent == 'Triangle') {
                triangleResultGeneralStatsEl.style.display = 'table';
                triangleResultGeometricStatsEl.style.display = 'none';
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
            else if (btn.textContent == 'Triangle') {
                triangleResultGeneralStatsEl.style.display = 'none';
                triangleResultGeometricStatsEl.style.display = 'table';
            }
            else if (btn.textContent == 'Custom') {
                console.log('not implemented - stats view changer');
            }
        }
    }
}

export function showResizer() {
    resizersEl.forEach(resizer => {
        resizer.setAttribute('style', 'display: block;');
    });
}