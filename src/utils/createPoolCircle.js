const poolSectionEl = document.getElementById('pool-section');

export function createPoolCircle(diameter, poolWidth, poolDepth1, poolDepth2) {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    };

    let drawingDiameter = diameter * 20;
    let drawingWidth = poolWidth * 20;

    if (diameter < 5) {
        drawingDiameter = 5 * 20;
    }
    if (poolWidth < 5) {
        drawingWidth = 5 * 20;
    }

    if (diameter > 40) {
        drawingDiameter = 40 * 20;
    }
    if (poolWidth > 22) {
        drawingWidth = 22 * 20;
    }

    const poolEl = document.createElement('div');
    poolEl.setAttribute('id', 'pool');
    poolEl.setAttribute('style', `width: ${drawingDiameter}px; height: ${drawingWidth}px; border-radius: 50%;`);
    poolEl.setAttribute('poolEl', 'circle');

    const diameterNumberEl = document.createElement('p');
    diameterNumberEl.textContent = `${diameter} m`;
    diameterNumberEl.setAttribute('style',
        `position: relative; top: ${(drawingWidth / 2) - 22}px; left: ${(drawingWidth / 2)}px;`);
    poolEl.appendChild(diameterNumberEl);

    const HrEl = document.createElement('hr');
    HrEl.setAttribute('style',
        `background-color: #f2f2f2; border: none; height: 1px; position: relative; top: ${(drawingWidth / 2) - 22}px`);
    poolEl.appendChild(HrEl);

    poolSectionEl.appendChild(poolEl);
}

export function resetPoolCircle() {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    };
}