import { createPoolRectangle, resetPoolDrawingRectangle } from './utils/createPoolRectangle.js';
import { createPoolCircle, resetPoolDrawingCircle } from './utils/createPoolCircle.js';
import { makeStatisticsRectangle, resetStatisticsRectangle } from './utils/createStatisticsRectangle.js';
import { makeStatisticsCircle, resetStatisticsCircle } from './utils/createStatisticsCircle.js';
import {
    activeStitisticsButtonsStyings,
    activePrimaryButtonsStyling,
    rectangleDispayView,
    circleDispayView
} from './utils/stylings.js';

const rectangleCalculationBtnSectionEl = document.querySelector('#rectangle-calculation');
const circleCalculationBtnSectionEl = document.querySelector('#circle-calculation');
const rectangleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#rectangle-calculation p'));
const circleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#circle-calculation p'));

const shapeBtnSectionEl = document.querySelector('#shape-select div');
const shapeBtnSectionElArray = Array.from(document.querySelectorAll('#shape-select div button'));
const resultBtnSectionEl = document.querySelector('#heading-stats div');
const resultBtnSectionElArray = Array.from(document.querySelectorAll('#heading-stats div button'));

const rectangleBtnEl = document.querySelector('#shape-select div button:nth-child(1)');
const circleBtnEl = document.querySelector('#shape-select div button:nth-child(2)');

const rectangleFormEl = document.getElementById('size-input');
const circleFormEl = document.getElementById('size-input-circle');

rectangleCalculationBtnSectionEl.addEventListener('click', (e) => {
    activeStitisticsButtonsStyings(e.target, rectangleCalculationBtnSectionElArray);
});
circleCalculationBtnSectionEl.addEventListener('click', (e) => {
    activeStitisticsButtonsStyings(e.target, circleCalculationBtnSectionElArray);
});

shapeBtnSectionEl.addEventListener('click', (e) => {
    activePrimaryButtonsStyling(e.target, shapeBtnSectionElArray);
});
resultBtnSectionEl.addEventListener('click', (e) => {
    activePrimaryButtonsStyling(e.target, resultBtnSectionElArray);
});

// Pool shape buttons dispay setters
rectangleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleDispayView();

    resetStatisticsCircle();
    resetPoolDrawingCircle();
});
circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    circleDispayView();

    resetStatisticsRectangle();
    resetPoolDrawingRectangle();
});
// Pool shape buttons dispay setters

rectangleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(rectangleFormEl);
    let poolWidth = parseFloat(formData.get('width'));
    let poolHeight = parseFloat(formData.get('height'));
    let poolDepth1 = parseFloat(formData.get('depth1'));
    let poolDepth2 = parseFloat(formData.get('depth2'));

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
    let poolDiameter = parseFloat(formData.get('diameter'));
    let poolWidth = parseFloat(formData.get('width'));
    let poolDepth1 = parseFloat(formData.get('depth1'));
    let poolDepth2 = parseFloat(formData.get('depth2'));

    if (poolDiameter && poolWidth && poolDepth1) {
        createPoolCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);
        circleFormEl.reset();

        makeStatisticsCircle(poolDiameter, poolWidth, poolDepth1, poolDepth2);
    }
});
