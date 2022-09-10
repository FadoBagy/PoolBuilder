import { animateNumbers } from "../animations.js";

const volumeResultEl = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(1) td:nth-child(2)');
const litersResultEl = document.querySelector('#triangle-stats .general-stats tbody tr:nth-child(2) td:nth-child(2)');

const perimeterResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(1) td:nth-child(2)');
const areaResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(2) td:nth-child(2)');
const geometricVolumeResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(3) td:nth-child(2)');
const geometricLitersResultEl = document.querySelector('#triangle-stats .geometric-stats tbody tr:nth-child(4) td:nth-child(2)');

export function makeStatisticsTriangle(sideA, sideB, sideC, heightH, depthDeep, depthShallow) {
    let averageDepth = 0;

    if (depthShallow) {
        averageDepth = (parseFloat(depthDeep) + parseFloat(depthShallow)) / 2;
    } else {
        averageDepth = depthDeep;
    }

    let area = (heightH * sideB) / 2;
    let volume = area * averageDepth;
    let liters = area * averageDepth * 1000;
    let perimeter = sideA + sideB + sideC;

    animateNumbers(volumeResultEl, 'm<sup>3</sup>', volume);
    animateNumbers(litersResultEl, 'l', liters);
    animateNumbers(perimeterResultEl, 'm', perimeter);
    animateNumbers(areaResultEl, 'm<sup>2</sup>', area);
    animateNumbers(geometricVolumeResultEl, 'm<sup>3</sup>', volume);
    animateNumbers(geometricLitersResultEl, 'l', liters);
};

export function resetStatisticsTriangle() {
    volumeResultEl.innerHTML = 'N/A';
    litersResultEl.textContent = 'N/A';
    perimeterResultEl.textContent = 'N/A';
    areaResultEl.innerHTML = 'N/A';
    geometricVolumeResultEl.innerHTML = 'N/A';
    geometricLitersResultEl.textContent = 'N/A';
};