import { createPoolRectangle } from './utils/createPoolRectangle.js';
import { createPoolCircle } from './utils/createPoolCircle.js';
import { makeStatisticsRectangle } from './utils/createStatisticsRectangle.js';
import { makeStatisticsCircle } from './utils/createStatisticsCircle.js';

const rectangleBtnEl = document.querySelector('#shape-select div button:nth-child(1)');
const circleBtnEl = document.querySelector('#shape-select div button:nth-child(2)');
const rectangleFormSectionEl = document.getElementById('rectangle-form');
const circleFormSectionEl = document.getElementById('circle-form');

const rectangleFormEl = document.getElementById('size-input');
const circleFormEl = document.getElementById('size-input-circle');

rectangleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleFormSectionEl.style.display = 'block';
    circleFormSectionEl.style.display = 'none';
});

circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'block';
});

rectangleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(rectangleFormEl);
    let poolWidth = parseInt(formData.get('width'));
    let poolHeight = parseInt(formData.get('height'));
    let poolDepth1 = parseInt(formData.get('depth1'));
    let poolDepth2 = parseInt(formData.get('depth2'));

    if (poolWidth && poolHeight && poolDepth1) {
        createPoolRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);
        rectangleFormEl.reset();

        makeStatisticsRectangle(poolWidth, poolHeight, poolDepth1, poolDepth2);
    } else {
        if (!poolWidth) {
            console.log('Enter Valid Width Number');
        }
        if (!poolHeight) {
            console.log('Enter Valid Height Number');
        }
    }
});

circleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(circleFormEl);
    let poolDiameter = parseInt(formData.get('diameter'));
    let poolWidth = parseInt(formData.get('width'));
    let poolDepth1 = parseInt(formData.get('depth1'));
    let poolDepth2 = parseInt(formData.get('depth2'));

    if (poolDiameter && poolWidth && poolDepth1) {
        createPoolCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);
        circleFormEl.reset();

        makeStatisticsCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);
    }
});
