const poolSectionEl = document.getElementById('pool-section');

export function createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2) {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    }

    let drawingWidth = poolWidth * 10;
    let drawingHeight = poolHeight * 10;

    if (poolWidth < 4) {
        drawingWidth = 4 * 10;
    }
    if (poolHeight < 5) {
        drawingHeight = 4 * 10;
    }

    if (poolWidth > 65) {
        drawingWidth = 65 * 10;
    }
    if (poolHeight > 30) {
        drawingHeight = 30 * 10;
    }

    const poolEl = document.createElement('div');
    poolEl.setAttribute('id', 'pool');
    poolEl.setAttribute('style', `width: ${drawingWidth}px; height: ${drawingHeight}px;`);

    const widthNumberEl = document.createElement('p');
    widthNumberEl.setAttribute('id', 'width-size');
    widthNumberEl.textContent = `${poolWidth} m`;
    widthNumberEl.setAttribute('style', `left: ${(drawingWidth / 2) - 22}px; bottom: 22px;`);
    poolEl.appendChild(widthNumberEl);

    const heightNumberEl = document.createElement('p');
    heightNumberEl.setAttribute('id', 'height-size');
    heightNumberEl.textContent = `${poolHeight} m`;
    heightNumberEl.setAttribute('style',
        `top: ${(drawingHeight / 2) - 37.44}px; right: 31.44px; transform: rotate(270deg);`);
    poolEl.appendChild(heightNumberEl);

    poolSectionEl.appendChild(poolEl);
}

export function resetPoolDrawingRectangle() {
    while (poolSectionEl.firstChild) {
        poolSectionEl.removeChild(poolSectionEl.lastChild);
    }
}