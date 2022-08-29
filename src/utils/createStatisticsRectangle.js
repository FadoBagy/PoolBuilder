import { animateStatistics } from './animations.js'

const perimeterResultEl = document.querySelector('#rectangle-stats div:nth-child(2) p:nth-child(2)');
const areaResultEl = document.querySelector('#rectangle-stats div:nth-child(2) p:nth-child(3)');
const volumeResultEl = document.querySelector('#rectangle-stats div:nth-child(2) p:nth-child(4)');
const litersResultEl = document.querySelector('#rectangle-stats div:nth-child(2) p:nth-child(5)');

export function makeStatisticsRectangle(width, height, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    perimeterResultEl.textContent = `${(2 * (height + width)).toLocaleString('en-US')} m`;
    areaResultEl.innerHTML = `${(width * height).toLocaleString('en-US')} m<sup>2</sup>`;
    volumeResultEl.innerHTML = `${(height * width * averageDepth).toLocaleString('en-US')} m<sup>3</sup>`;
    litersResultEl.textContent = `${(height * width * averageDepth * 1000).toLocaleString('en-US')} l`;

    // animateStatistics(perimeterResultEl, (2 * (height + width)), 'm');
    // animateStatistics(areaResultEl, (width * height), 'm<sup>2</sup>');
    // animateStatistics(volumeResultEl, (height * width * averageDepth), 'm<sup>3</sup>');
    // animateStatistics(litersResultEl, (height * width * averageDepth * 1000), 'l');
};

export function resetStatisticsRectangle() {
    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';
};