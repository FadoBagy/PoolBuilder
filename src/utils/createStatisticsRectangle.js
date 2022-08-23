const perimeterResultEl = document.querySelector('#results p:nth-child(1)');
const areaResultEl = document.querySelector('#results p:nth-child(2)');
const volumeResultEl = document.querySelector('#results p:nth-child(3)');
const litersResultEl = document.querySelector('#results p:nth-child(4)');

export function makeStatisticsRectangle(width, height, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    perimeterResultEl.textContent = `Perimeter - ${(2 * (height + width)).toLocaleString('en-US')} m`;
    areaResultEl.innerHTML = `Surface area - ${(width * height).toLocaleString('en-US')} m<sup>2</sup>`;
    volumeResultEl.innerHTML = `Volume - ${(height * width * averageDepth).toLocaleString('en-US')} m<sup>3</sup>`;
    litersResultEl.textContent = `Liters - ${(height * width * averageDepth * 1000).toLocaleString('en-US')} l`;
};