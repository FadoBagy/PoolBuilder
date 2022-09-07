const volumeResultEl = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const diagonalResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const inradiusResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

export function animateNumbersRectangle(volume, liters, perimeter, area, radius, inradius) {


    // volumeResultEl.innerHTML = `${volume} m<sup>3</sup>`;
    increaseCount(volumeResultEl, 'm<sup>3</sup>', volume);
    // litersResultEl.textContent = `${liters} l`;
    increaseCount(litersResultEl, 'l', liters);
    // perimeterResultEl.textContent = `${perimeter} m`;
    increaseCount(perimeterResultEl, 'm', perimeter);
    // areaResultEl.innerHTML = `${area} m<sup>2</sup>`;
    increaseCount(areaResultEl, 'm<sup>2</sup>', area);




    diagonalResultEl.textContent = `${radius} m`;
    inradiusResultEl.textContent = `${inradius} m`;
    geometricVolumeResultEl.innerHTML = volumeResultEl.innerHTML;
    geometricLitersResultEl.textContent = litersResultEl.textContent;

};

function increaseCount(element, unit, value) {
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        if (value <= 1000) {
            initialValue += 1;
        } else if (value > 1000 && value <= 50000) {
            initialValue += 100;
        } else if (value > 50000 && value <= 500000) {
            initialValue += 500;
        } else if (value > 500000 && value <= 1000000) {
            initialValue += 5000;
        } else if (value > 1000000 && value <= 5000000) {
            initialValue += 10000;
        } else if (value > 5000000 && value <= 10000000) {
            initialValue += 50000;
        } else {
            initialValue += 1000000;
        }

        if (initialValue > value) {
            element.innerHTML = `${value.toLocaleString('en-US',
                { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${unit}`;
            clearInterval(increaseCount);
            return;
        }

        element.innerHTML = `${initialValue.toLocaleString('en-US',
            { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${unit}`;
    }, 5);
}