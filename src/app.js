import { validateRectangleForm } from './utils/creating/createPoolRectangle.js';
import { validateCircleForm } from './utils/creating/createPoolCircle.js';
import { validateTriangleForm } from './utils/creating/createPoolTriangle.js';

import { resetStatisticsRectangle } from './utils/creating/createStatisticsRectangle.js';
import { resetStatisticsCircle } from './utils/creating/createStatisticsCircle.js';
import { resetStatisticsTriangle } from './utils/creating/createStatisticsTriangle.js';

import {
    activeStitisticsButtonsStyings,
    activePrimaryButtonsStyling,
    rectangleDispayView,
    circleDispayView,
    triangleDispayView,
    resetPoolDrawing,
    removeAllActiveStitisticsButtonsStyings,
    generalResultView,
    geometricResultView,
    removeIconsStyle
} from './utils/stylings.js';

const rectangleCalculationlRows = document.querySelectorAll('#rectangle-stats tbody tr');
const circleCalculationlRows = document.querySelectorAll('#circle-stats tbody tr');
const triangleCalculationlRows = document.querySelectorAll('#triangle-stats tbody tr');

const shapeBtnSectionEl = document.querySelector('#shape-select div');
const shapeBtnSectionElArray = Array.from(document.querySelectorAll('#shape-select div button'));
const resultBtnSectionEl = document.querySelector('#heading-stats div');
const resultBtnSectionElArray = Array.from(document.querySelectorAll('#heading-stats div button'));

const rectangleBtnEl = document.querySelector('#shape-select div button:nth-child(1)');
const circleBtnEl = document.querySelector('#shape-select div button:nth-child(2)');
const triangleBtnEl = document.querySelector('#shape-select div button:nth-child(3)');

const rectangleFormEl = document.getElementById('size-input');
const circleFormEl = document.getElementById('size-input-circle');
const triangleFormEl = document.getElementById('size-input-triangle');

const generalStatsBtnEl = document.querySelector('#heading-stats button:nth-child(1)');
const geometricStatsBtnEl = document.querySelector('#heading-stats button:nth-child(2)');

// Statistics styling
rectangleCalculationlRows.forEach(row => {
    row.addEventListener('click', () => {
        activeStitisticsButtonsStyings(row, rectangleCalculationlRows);
    });
});
circleCalculationlRows.forEach(row => {
    row.addEventListener('click', () => {
        activeStitisticsButtonsStyings(row, circleCalculationlRows);
    });
});
triangleCalculationlRows.forEach(row => {
    row.addEventListener('click', () => {
        activeStitisticsButtonsStyings(row, triangleCalculationlRows);
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
    generalResultView();
    activePrimaryButtonsStyling(resultBtnSectionElArray[0], resultBtnSectionElArray);

    removeIconsStyle();
    removeAllActiveStitisticsButtonsStyings(rectangleCalculationlRows);
    resetStatisticsCircle();
    resetStatisticsTriangle();
    resetPoolDrawing();
});
circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    circleDispayView();
    generalResultView();
    activePrimaryButtonsStyling(resultBtnSectionElArray[0], resultBtnSectionElArray);

    removeIconsStyle();
    removeAllActiveStitisticsButtonsStyings(circleCalculationlRows);
    resetStatisticsRectangle();
    resetStatisticsTriangle();
    resetPoolDrawing();
});
triangleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    triangleDispayView();
    generalResultView();
    activePrimaryButtonsStyling(resultBtnSectionElArray[0], resultBtnSectionElArray);

    removeIconsStyle();
    removeAllActiveStitisticsButtonsStyings(triangleCalculationlRows);
    resetStatisticsRectangle();
    resetStatisticsCircle();
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
triangleFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateTriangleForm(triangleFormEl);
});

// Navigating in the results section
generalStatsBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    generalResultView();
});
geometricStatsBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    geometricResultView();
});