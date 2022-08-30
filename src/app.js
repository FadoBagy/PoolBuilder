import { resetPoolDrawingRectangle, validateRectangleForm } from './utils/createPoolRectangle.js';
import { resetPoolDrawingCircle, validateCircleForm } from './utils/createPoolCircle.js';
import { resetStatisticsRectangle } from './utils/createStatisticsRectangle.js';
import { resetStatisticsCircle } from './utils/createStatisticsCircle.js';
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

rectangleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateRectangleForm(rectangleFormEl);
});

circleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateCircleForm(circleFormEl);
});
