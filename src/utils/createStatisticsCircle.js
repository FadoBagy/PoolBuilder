import { animateStatistics } from './animations.js'

const circumferenceResultEl = document.querySelector('#circle-stats div:nth-child(2) p:nth-child(2)');
const areaResultEl = document.querySelector('#circle-stats div:nth-child(2) p:nth-child(3)');
const volumeResultEl = document.querySelector('#circle-stats div:nth-child(2) p:nth-child(4)');
const litersResultEl = document.querySelector('#circle-stats div:nth-child(2) p:nth-child(5)');


export function makeStatisticsCircle(diameter, width, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    circumferenceResultEl.textContent = `${(2 * Math.PI * (diameter / 2)).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m`;
    areaResultEl.innerHTML = `${(Math.PI * Math.pow((diameter / 2), 2)).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m<sup>2</sup>`;
    volumeResultEl.innerHTML = `${(Math.PI * Math.pow((diameter / 2), 2) * averageDepth).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m<sup>3</sup>`;
    litersResultEl.textContent = `${(Math.PI * Math.pow((diameter / 2), 2) * averageDepth * 1000).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} l`;

    // animateStatistics(circumferenceResultEl, (2 * Math.PI * (diameter / 2)), 'm');
    // animateStatistics(areaResultEl, (Math.PI * Math.pow((diameter / 2), 2)), 'm<sup>2</sup>');
    // animateStatistics(volumeResultEl, (Math.PI * Math.pow((diameter / 2), 2) * averageDepth), 'm<sup>3</sup>');
    // animateStatistics(litersResultEl, (Math.PI * Math.pow((diameter / 2), 2) * averageDepth * 1000), 'l');
};

export function resetStatisticsCircle() {
    circumferenceResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';
};