const perimeterResultEl = document.querySelector('#results p:nth-child(1)');
const areaResultEl = document.querySelector('#results p:nth-child(2)');
const volumeResultEl = document.querySelector('#results p:nth-child(3)');
const litersResultEl = document.querySelector('#results p:nth-child(4)');

export function makeStatisticsCircle(diameter, width, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    perimeterResultEl.textContent = `Circumference ~ ${(2 * Math.PI * (diameter / 2).toLocaleString('en-US')).toFixed(2)} m`;
    areaResultEl.innerHTML = `Surface area ~ ${(Math.PI * Math.pow((diameter / 2), 2)).toFixed(2).toLocaleString('en-US')} m<sup>2</sup>`;
    volumeResultEl.innerHTML = `Volume ~ ${(Math.PI * Math.pow((diameter / 2), 2) * averageDepth).toFixed(2).toLocaleString('en-US')} m<sup>3</sup>`;
    litersResultEl.textContent = `Liters ~ ${(Math.PI * Math.pow((diameter / 2), 2) * averageDepth * 1000).toFixed(2).toLocaleString('en-US')} l`;
};