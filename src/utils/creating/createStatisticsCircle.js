import { animateNumbers } from "../animations.js";

const volumeResultEl = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#circle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const radiusResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const diameterResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(5) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#circle-stats .geometric-stats tbody tr:nth-child(6) td:nth-child(2)');

export function makeStatisticsCircle(diameter, width, depthDeep, depthShallow) {
    let averageDepth = 0;

    if (depthShallow) {
        averageDepth = (parseFloat(depthDeep) + parseFloat(depthShallow)) / 2;
    } else {
        averageDepth = depthDeep;
    }

    let volume = Math.PI * Math.pow((diameter / 2), 2) * averageDepth;
    let liters = Math.PI * Math.pow((diameter / 2), 2) * averageDepth * 1000;
    let perimeter = 2 * Math.PI * (diameter / 2);
    let area = Math.PI * Math.pow((diameter / 2), 2);
    let radius = diameter / 2;
    let diameterResult = diameter;

    animateNumbers(volumeResultEl, 'm<sup>3</sup>', volume);
    animateNumbers(litersResultEl, 'l', liters);
    animateNumbers(perimeterResultEl, 'm', perimeter);
    animateNumbers(areaResultEl, 'm<sup>2</sup>', area);
    animateNumbers(radiusResultEl, 'm', radius);
    animateNumbers(diameterResultEl, 'm', diameterResult);
    animateNumbers(geometricVolumeResultEl, 'm<sup>3</sup>', volume);
    animateNumbers(geometricLitersResultEl, 'l', liters);
}

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