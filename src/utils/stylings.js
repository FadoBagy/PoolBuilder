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
    const poolWrapperEl = document.querySelector('.wrapper');
    const poolAreaHolderEl = document.querySelector('.area-holder');
    const poolLineEl = document.querySelector('.line');
    const poolInnerCircleEl = document.querySelector('.inner-circle');
    const poolInRadiusLineEl = document.querySelector('.inRadiusLine');
    const diameterCircleEl = document.querySelector('.diameter-circle');
    const radiusCircleEl = document.querySelector('.radius-circle');

    const perimeterIconElRectangle = document.querySelector('.rectangle-icons img[alt="perimeter"]');
    const areaIconElRectangle = document.querySelector('.rectangle-icons img[alt="area"]');
    const volumeIconElRectangle = document.querySelector('.rectangle-icons img[alt="volume"]');
    const litersIconElRectangle = document.querySelector('.rectangle-icons img[alt="liters"]');
    const diagonalIconElRectangle = document.querySelector('.rectangle-icons img[alt="diagonal"]');
    const radiusIconElRectangle = document.querySelector('.rectangle-icons img[alt="radius"]');

    const perimeterIconElCircle = document.querySelector('.circle-icons img[alt="perimeter"]');
    const areaIconElCircle = document.querySelector('.circle-icons img[alt="area"]');
    const volumeIconElCircle = document.querySelector('.circle-icons img[alt="volume"]');
    const litersIconElCircle = document.querySelector('.circle-icons img[alt="liters"]');
    const radiusIconElCircle = document.querySelector('.circle-icons img[alt="radius"]');
    const diameterIconElCircle = document.querySelector('.circle-icons img[alt="diameter"]');

    if (
        poolWrapperEl &&
        poolAreaHolderEl &&
        poolLineEl &&
        poolInnerCircleEl &&
        poolInRadiusLineEl &&
        perimeterIconElRectangle &&
        areaIconElRectangle &&
        volumeIconElRectangle &&
        litersIconElRectangle &&
        diagonalIconElRectangle &&
        radiusIconElRectangle
    ) {
        if (element.parentElement.parentElement.parentElement.id == 'rectangle-stats') {

            if (element.children[0].textContent == 'Perimeter') {
                poolWrapperEl.classList.add('active-stat-border');
                perimeterIconElRectangle.classList.add('active-pool-icons-img');
            } else if (element.children[0].textContent == 'Surface area') {
                poolAreaHolderEl.classList.add('active-stat-area');
                areaIconElRectangle.classList.add('active-pool-icons-img');
            } else if (element.children[0].textContent == 'Volume') {
                volumeIconElRectangle.classList.add('active-pool-icons-img');
            } else if (element.children[0].textContent == 'Liters') {
                litersIconElRectangle.classList.add('active-pool-icons-img');
            } else if (element.children[0].textContent == 'Diagonal') {
                poolLineEl.classList.add('active-stat-line');
                diagonalIconElRectangle.classList.add('active-pool-icons-img');
            } else if (element.children[0].textContent == 'Inradius') {
                poolInnerCircleEl.classList.add('active-stat-border');
                poolInRadiusLineEl.classList.add('active-stat-background');
                radiusIconElRectangle.classList.add('active-pool-icons-img');
            }

        }
    } else if (
        poolWrapperEl &&
        poolAreaHolderEl &&
        diameterCircleEl &&
        radiusCircleEl &&
        perimeterIconElCircle &&
        areaIconElCircle &&
        volumeIconElCircle &&
        litersIconElCircle
    ) {
        if (element.children[0].textContent == 'Perimeter') {
            poolWrapperEl.classList.add('active-stat-border');
            perimeterIconElCircle.classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Surface area') {
            poolAreaHolderEl.classList.add('active-stat-area');
            areaIconElCircle.classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Volume') {
            volumeIconElCircle.classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Liters') {
            litersIconElCircle.classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Radius') {
            radiusCircleEl.classList.add('active-stat-background');
            radiusIconElCircle.classList.add('active-pool-icons-img');
        } else if (element.children[0].textContent == 'Diameter') {
            diameterCircleEl.classList.add('active-stat-background', 'visible-block');
            diameterIconElCircle.classList.add('active-pool-icons-img');
        }
    }
}

export function removeIconsStyle() {
    const poolWrapperEl = document.querySelector('.wrapper');
    const poolAreaHolderEl = document.querySelector('.area-holder');
    const poolLineEl = document.querySelector('.line');
    const poolInnerCircleEl = document.querySelector('.inner-circle');
    const poolInRadiusLineEl = document.querySelector('.inRadiusLine');
    const diameterCircleEl = document.querySelector('.diameter-circle');
    const radiusCircleEl = document.querySelector('.radius-circle');

    const perimeterIconElRectangle = document.querySelector('.rectangle-icons img[alt="perimeter"]');
    const areaIconElRectangle = document.querySelector('.rectangle-icons img[alt="area"]');
    const volumeIconElRectangle = document.querySelector('.rectangle-icons img[alt="volume"]');
    const litersIconElRectangle = document.querySelector('.rectangle-icons img[alt="liters"]');
    const diagonalIconElRectangle = document.querySelector('.rectangle-icons img[alt="diagonal"]');
    const radiusIconElRectangle = document.querySelector('.rectangle-icons img[alt="radius"]');

    const perimeterIconElCircle = document.querySelector('.circle-icons img[alt="perimeter"]');
    const areaIconElCircle = document.querySelector('.circle-icons img[alt="area"]');
    const volumeIconElCircle = document.querySelector('.circle-icons img[alt="volume"]');
    const litersIconElCircle = document.querySelector('.circle-icons img[alt="liters"]');
    const radiusIconElCircle = document.querySelector('.circle-icons img[alt="radius"]');
    const diameterIconElCircle = document.querySelector('.circle-icons img[alt="diameter"]');

    if (
        poolWrapperEl &&
        poolAreaHolderEl &&
        poolLineEl &&
        poolInnerCircleEl &&
        poolInRadiusLineEl &&
        perimeterIconElRectangle &&
        areaIconElRectangle &&
        volumeIconElRectangle &&
        litersIconElRectangle &&
        diagonalIconElRectangle &&
        radiusIconElRectangle
    ) {
        poolWrapperEl.classList.remove("active-stat-border");
        poolAreaHolderEl.classList.remove("active-stat-area");
        poolLineEl.classList.remove('active-stat-line');
        poolInnerCircleEl.classList.remove('active-stat-border');
        poolInRadiusLineEl.classList.remove('active-stat-background');
        perimeterIconElRectangle.classList.remove('active-pool-icons-img');
        areaIconElRectangle.classList.remove('active-pool-icons-img');
        volumeIconElRectangle.classList.remove('active-pool-icons-img');
        litersIconElRectangle.classList.remove('active-pool-icons-img');
        diagonalIconElRectangle.classList.remove('active-pool-icons-img');
        radiusIconElRectangle.classList.remove('active-pool-icons-img');
    } else if (
        poolWrapperEl &&
        poolAreaHolderEl &&
        diameterCircleEl &&
        radiusCircleEl &&
        perimeterIconElCircle &&
        areaIconElCircle &&
        volumeIconElCircle &&
        litersIconElCircle &&
        radiusIconElCircle &&
        diameterIconElCircle
    ) {
        poolWrapperEl.classList.remove('active-stat-border');
        poolAreaHolderEl.classList.remove('active-stat-area');
        diameterCircleEl.classList.remove('active-stat-background', 'visible-block');
        radiusCircleEl.classList.remove('active-stat-background');
        perimeterIconElCircle.classList.remove('active-pool-icons-img');
        areaIconElCircle.classList.remove('active-pool-icons-img');
        volumeIconElCircle.classList.remove('active-pool-icons-img');
        litersIconElCircle.classList.remove('active-pool-icons-img');
        radiusIconElCircle.classList.remove('active-pool-icons-img');
        diameterIconElCircle.classList.remove('active-pool-icons-img');
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
export function resetInputValues() {
    document.querySelector('#size-input input[name="width"]').value = 0;
    document.querySelector('#size-input input[name="height"]').value = 0;
    document.querySelector('#size-input input[name="depth1"]').value = 0;
    document.querySelector('#size-input input[name="depth2"]').value = 0;

    document.querySelector('#size-input-circle input[name="diameter"]').value = 0;
    document.querySelector('#size-input-circle input[name="width"]').value = 0;
    document.querySelector('#size-input-circle input[name="depth1"]').value = 0;
    document.querySelector('#size-input-circle input[name="depth2"]').value = 0;

    document.querySelector('#size-input-triangle input[name="sideA"]').value = 0;
    document.querySelector('#size-input-triangle input[name="sideB"]').value = 0;
    document.querySelector('#size-input-triangle input[name="sideC"]').value = 0;
    document.querySelector('#size-input-triangle input[name="heightH"]').value = 0;
    document.querySelector('#size-input-triangle input[name="depth1"]').value = 0;
    document.querySelector('#size-input-triangle input[name="depth2"]').value = 0;
}