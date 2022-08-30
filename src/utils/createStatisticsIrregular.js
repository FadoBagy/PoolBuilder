const perimeterResultEl = document.querySelector('#irregular-stats div:nth-child(2) p:nth-child(2)');
const areaResultEl = document.querySelector('#irregular-stats div:nth-child(2) p:nth-child(3)');
const volumeResultEl = document.querySelector('#irregular-stats div:nth-child(2) p:nth-child(4)');
const litersResultEl = document.querySelector('#irregular-stats div:nth-child(2) p:nth-child(5)');

export function makeStatisticsIrregular(sideA, sideB, sideC, sideD, depth1, depth2) {
    let averageDepth = 0;
    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    perimeterResultEl.textContent = `${(sideA + sideB + sideC + sideD).toLocaleString('en-US')} m`;
    areaResultEl.innerHTML = `${(((sideD + sideB) / 2) * ((sideA + sideC) / 2)).toLocaleString('en-US')} m<sup>2</sup>`;
    volumeResultEl.innerHTML = `${(((sideD + sideB) / 2) * ((sideA + sideC) / 2) * averageDepth).toLocaleString('en-US')} m<sup>3</sup>`;
    litersResultEl.textContent = `${(((sideD + sideB) / 2) * ((sideA + sideC) / 2) * averageDepth * 1000).toLocaleString('en-US')} l`;
};

export function resetStatisticsIrregular() {
    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';
};