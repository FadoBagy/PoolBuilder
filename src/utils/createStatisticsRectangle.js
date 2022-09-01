const volumeResultEl = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const radiusResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const inradiusResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

export function makeStatisticsRectangle(width, height, depth1, depth2) {
    let averageDepth = 0;
    let shortSide;

    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    if (width > height) {
        shortSide = height;
    } else { shortSide = width; }

    volumeResultEl.innerHTML = `${(height * width * averageDepth).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m<sup>3</sup>`;
    litersResultEl.textContent = `${(height * width * averageDepth * 1000).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} l`;

    perimeterResultEl.textContent = `${(2 * (height + width)).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m`;
    areaResultEl.innerHTML = `${(width * height).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m<sup>2</sup>`;
    radiusResultEl.textContent = `${(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m`;
    inradiusResultEl.textContent = `${(shortSide / 2).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} m`;
    geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
    geometricLitersResultEl.textContent = litersResultEl.textContent;
};

export function resetStatisticsRectangle() {
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';

    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    radiusResultEl.textContent = 'N/A';
    inradiusResultEl.textContent = 'N/A';
    geometricVolumeResultEl.innerHTML = 'N/A';
    geometricLitersResultEl.textContent = 'N/A';
};