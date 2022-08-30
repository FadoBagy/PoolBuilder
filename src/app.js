import { validateRectangleForm } from './utils/createPoolRectangle.js';
import { validateCircleForm } from './utils/createPoolCircle.js';
import { validateIrregularForm } from './utils/createPoolIrregular.js';

import { resetStatisticsRectangle } from './utils/createStatisticsRectangle.js';
import { resetStatisticsCircle } from './utils/createStatisticsCircle.js';
import { resetStatisticsIrregular } from './utils/createStatisticsIrregular.js';

import {
    activeStitisticsButtonsStyings,
    activePrimaryButtonsStyling,
    rectangleDispayView,
    circleDispayView,
    irregularDispayView,
    resetPoolDrawing
} from './utils/stylings.js';

const rectangleCalculationBtnSectionEl = document.querySelector('#rectangle-calculation');
const circleCalculationBtnSectionEl = document.querySelector('#circle-calculation');
const irregularCalculationBtnSectionEl = document.querySelector('#irregular-calculation');
const rectangleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#rectangle-calculation p'));
const circleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#circle-calculation p'));
const irregularCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#irregular-calculation p'));

const shapeBtnSectionEl = document.querySelector('#shape-select div');
const shapeBtnSectionElArray = Array.from(document.querySelectorAll('#shape-select div button'));
const resultBtnSectionEl = document.querySelector('#heading-stats div');
const resultBtnSectionElArray = Array.from(document.querySelectorAll('#heading-stats div button'));

const rectangleBtnEl = document.querySelector('#shape-select div button:nth-child(1)');
const circleBtnEl = document.querySelector('#shape-select div button:nth-child(2)');
const irregularBtnEl = document.querySelector('#shape-select div button:nth-child(3)');

const rectangleFormEl = document.getElementById('size-input');
const circleFormEl = document.getElementById('size-input-circle');
const irregularFormEl = document.getElementById('size-input-irregular');

rectangleCalculationBtnSectionEl.addEventListener('click', (e) => {
    activeStitisticsButtonsStyings(e.target, rectangleCalculationBtnSectionElArray);
});
circleCalculationBtnSectionEl.addEventListener('click', (e) => {
    activeStitisticsButtonsStyings(e.target, circleCalculationBtnSectionElArray);
});
irregularCalculationBtnSectionEl.addEventListener('click', (e) => {
    activeStitisticsButtonsStyings(e.target, irregularCalculationBtnSectionElArray);
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
    resetPoolDrawing();
});
circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    circleDispayView();

    resetStatisticsRectangle();
    resetPoolDrawing();
});
irregularBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    irregularDispayView();

    resetStatisticsIrregular();
    resetPoolDrawing();
});

rectangleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateRectangleForm(rectangleFormEl);
});
circleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateCircleForm(circleFormEl);
});
irregularFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateIrregularForm(irregularFormEl);
});
