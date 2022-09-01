const volumeResultEl = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const radiusResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const diameterResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

export function makeStatisticsCircle(diameter, width, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    let volume = (Math.PI * Math.pow((diameter / 2), 2) * averageDepth).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let liters = (Math.PI * Math.pow((diameter / 2), 2) * averageDepth * 1000).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let perimeter = (2 * Math.PI * (diameter / 2)).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let area = (Math.PI * Math.pow((diameter / 2), 2)).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let radius = (diameter / 2).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let diameterResult = diameter.toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });

    volumeResultEl.innerHTML = `${volume} m<sup>3</sup>`;
    litersResultEl.textContent = `${liters} l`;

    perimeterResultEl.textContent = `${perimeter} m`;
    areaResultEl.innerHTML = `${area} m<sup>2</sup>`;
    radiusResultEl.textContent = `${radius} m`;
    diameterResultEl.textContent = `${diameterResult} m`;
    geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
    geometricLitersResultEl.textContent = litersResultEl.textContent;
};

export function resetStatisticsCircle() {
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';

    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    radiusResultEl.textContent = 'N/A';
    diameterResultEl.textContent = 'N/A';
    geometricVolumeResultEl.innerHTML = 'N/A';
    geometricLitersResultEl.textContent = 'N/A';
};