const volumeResultElRectangle = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultElRectangle = document.querySelector('#rectangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');
const perimeterResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const diagonalResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const inradiusResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultElRectangle = document.querySelector('#rectangle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

const volumeResultElCircle = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultElCircle = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');
const perimeterResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const radiusResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const diameterResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultElCircle = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

const volumeResultElTriangle = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultElTriangle = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');
const perimeterResultElTriangle = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultElTriangle = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const geometricVolumeResultElTriangle = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const geometricLitersResultElTriangle = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');

export function setStatisticsRectangle(volume, liters, perimeter, area, diagonal, inradius) {
    animateNumbers(volumeResultElRectangle, 'm<sup>3</sup>', volume);
    animateNumbers(litersResultElRectangle, 'l', liters);
    animateNumbers(perimeterResultElRectangle, 'm', perimeter);
    animateNumbers(areaResultElRectangle, 'm<sup>2</sup>', area);
    animateNumbers(diagonalResultElRectangle, 'm', diagonal);
    animateNumbers(inradiusResultElRectangle, 'm', inradius);
    animateNumbers(geometricVolumeResultElRectangle, 'm<sup>3</sup>', volume);
    animateNumbers(geometricLitersResultElRectangle, 'l', liters);
};

export function setStatisticsCircle(volume, liters, perimeter, area, radius, diameterResult) {
    animateNumbers(volumeResultElCircle, 'm<sup>3</sup>', volume);
    animateNumbers(litersResultElCircle, 'l', liters);
    animateNumbers(perimeterResultElCircle, 'm', perimeter);
    animateNumbers(areaResultElCircle, 'm<sup>2</sup>', area);
    animateNumbers(radiusResultElCircle, 'm', radius);
    animateNumbers(diameterResultElCircle, 'm', diameterResult);
    animateNumbers(geometricVolumeResultElCircle, 'm<sup>3</sup>', volume);
    animateNumbers(geometricLitersResultElCircle, 'l', liters);
};

export function setStatisticsTriangle(volume, liters, perimeter, area) {
    animateNumbers(volumeResultElTriangle, 'm<sup>3</sup>', volume);
    animateNumbers(litersResultElTriangle, 'l', liters);
    animateNumbers(perimeterResultElTriangle, 'm', perimeter);
    animateNumbers(areaResultElTriangle, 'm<sup>2</sup>', area);
    animateNumbers(geometricVolumeResultElTriangle, 'm<sup>3</sup>', volume);
    animateNumbers(geometricLitersResultElTriangle, 'l', liters);
};

function animateNumbers(element, unit, value) {
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += value / 100;

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