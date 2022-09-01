const volumeResultEl = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');

export function makeStatisticsTriangle(sideA, sideB, sideC, heightH, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    let area = ((heightH * sideB) / 2).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let volume = (area * averageDepth).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let liters = (area * averageDepth * 1000).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });
    let perimeter = (sideA + sideB + sideC).toLocaleString('en-US', {
        minimumFractionDigits: 2, maximumFractionDigits: 2
    });

    volumeResultEl.innerHTML = `${volume} m<sup>3</sup>`;
    litersResultEl.textContent = `${liters} l`;

    perimeterResultEl.textContent = `${perimeter} m`;
    areaResultEl.innerHTML = `${area} m<sup>2</sup>`;
    geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
    geometricLitersResultEl.textContent = litersResultEl.textContent;
};

export function resetStatisticsTriangle() {
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';
    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    geometricVolumeResultEl.innerHTML = 'N/A';
    geometricLitersResultEl.textContent = 'N/A';
};