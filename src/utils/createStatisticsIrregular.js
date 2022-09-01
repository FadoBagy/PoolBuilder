const volumeResultEl = document.querySelector('#irregular-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#irregular-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const diagonalPResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const diagonalQResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#irregular-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

export function makeStatisticsIrregular(sideA, sideB, sideC, sideD, depth1, depth2) {
    let averageDepth = 0;

    if (depth2) {
        averageDepth = (depth1 + depth2) / 2;
    } else {
        averageDepth = depth1;
    }

    if (sideA == sideC && sideB == sideD) {
        let area = sideB * h;

        let h = area / sideB;
        console.log(h);
        let sinA = h / sideA;
        console.log(sinA);

        volumeResultEl.innerHTML = `${(area * averageDepth).toLocaleString('en-US')} m<sup>3</sup>`;
        litersResultEl.textContent = `${(area * averageDepth * 1000).toLocaleString('en-US')} l`;

        perimeterResultEl.textContent = `${(2 * (sideA + sideB)).toLocaleString('en-US')} m`;
        areaResultEl.innerHTML = `${area} m<sup>2</sup>`;
        // diagonalPResultEl.textContent = `${(       ).toLocaleString('en-US')} m`;
        diagonalQResultEl.textContent = diagonalPResultEl.textContent;
        geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
        geometricLitersResultEl.textContent = litersResultEl.textContent;
    } else {
        let area = (((sideD + sideB) / 2) * ((sideA + sideC) / 2)).toLocaleString('en-US');

        volumeResultEl.innerHTML = `${(area * averageDepth).toLocaleString('en-US')} m<sup>3</sup>`;
        litersResultEl.textContent = `${(area * averageDepth * 1000).toLocaleString('en-US')} l`;

        perimeterResultEl.textContent = `${(sideA + sideB + sideC + sideD).toLocaleString('en-US')} m`;
        areaResultEl.innerHTML = `${area} m<sup>2</sup>`;
        // diagonalPResultEl.textContent = `${(       ).toLocaleString('en-US')} m`;
        diagonalQResultEl.textContent = diagonalPResultEl.textContent;
        geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
        geometricLitersResultEl.textContent = litersResultEl.textContent;
    }


};

export function resetStatisticsIrregular() {
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';

    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    diagonalPResultEl.textContent = 'N/A';
    diagonalQResultEl.textContent = 'N/A';
    geometricVolumeResultEl.innerHTML = 'N/A';
    geometricLitersResultEl.textContent = 'N/A';
};