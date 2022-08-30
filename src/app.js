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
    resetPoolDrawing,
    removeAllActiveStitisticsButtonsStyings
} from './utils/stylings.js';

const rectangleCalculationlRows = document.querySelectorAll('#rectangle-stats tbody tr');
const circleCalculationlRows = document.querySelectorAll('#circle-stats tbody tr');
const irregularCalculationlRows = document.querySelectorAll('#irregular-stats tbody tr');

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

// Statistics styling
rectangleCalculationlRows.forEach(row => {
    row.addEventListener('click', (e) => {
        activeStitisticsButtonsStyings(row, rectangleCalculationlRows);
    });
});
circleCalculationlRows.forEach(row => {
    row.addEventListener('click', () => {
        activeStitisticsButtonsStyings(row, circleCalculationlRows);
    });
});
irregularCalculationlRows.forEach(row => {
    row.addEventListener('click', () => {
        activeStitisticsButtonsStyings(row, irregularCalculationlRows);
    });
});

// Styling for primary buttons
shapeBtnSectionEl.addEventListener('click', (e) => {
    activePrimaryButtonsStyling(e.target, shapeBtnSectionElArray);
});
resultBtnSectionEl.addEventListener('click', (e) => {
    activePrimaryButtonsStyling(e.target, resultBtnSectionElArray);
});

// Navigating in the input section
rectangleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleDispayView();

    removeAllActiveStitisticsButtonsStyings(rectangleCalculationlRows);
    resetStatisticsCircle();
    resetPoolDrawing();
});
circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    circleDispayView();

    removeAllActiveStitisticsButtonsStyings(circleCalculationlRows);
    resetStatisticsRectangle();
    resetPoolDrawing();
});
irregularBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    irregularDispayView();

    removeAllActiveStitisticsButtonsStyings(irregularCalculationlRows);
    resetStatisticsIrregular();
    resetPoolDrawing();
});

// Validating and creating pool
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
