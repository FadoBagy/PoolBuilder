import { createPoolRectangle, resetPoolRectangle } from './utils/createPoolRectangle.js';
import { createPoolCircle, resetPoolCircle } from './utils/createPoolCircle.js';
import { makeStatisticsRectangle, resetStatisticsRectangle } from './utils/createStatisticsRectangle.js';
import { makeStatisticsCircle, resetStatisticsCircle } from './utils/createStatisticsCircle.js';

const rectangleCalculationBtnSectionEl = document.querySelector('#rectangle-calculation');
const rectangleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#rectangle-calculation p'));
const circleCalculationBtnSectionEl = document.querySelector('#circle-calculation');
const circleCalculationBtnSectionElArray = Array.from(document.querySelectorAll('#circle-calculation p'));

const shapeBtnSectionEl = document.querySelector('#shape-select div');
const shapeBtnSectionElArray = Array.from(document.querySelectorAll('#shape-select div button'));
const resultBtnSectionEl = document.querySelector('#heading-stats div');
const resultBtnSectionElArray = Array.from(document.querySelectorAll('#heading-stats div button'));

const rectangleBtnEl = document.querySelector('#shape-select div button:nth-child(1)');
const circleBtnEl = document.querySelector('#shape-select div button:nth-child(2)');
const rectangleFormSectionEl = document.getElementById('rectangle-form');
const circleFormSectionEl = document.getElementById('circle-form');
const rectangleStatsBtnEl = document.getElementById('rectangle-stats');
const circleStatsBtnEl = document.getElementById('circle-stats');

const rectangleFormEl = document.getElementById('size-input');
const circleFormEl = document.getElementById('size-input-circle');

// Stitistics button styings
rectangleCalculationBtnSectionEl.addEventListener('click', (e) => {
    if (e.target.hasAttribute('style')) {

        if (e.target.classList.contains('active-stat')) {
            e.target.classList.remove('active-stat');
            e.target.setAttribute('style',
                'cursor: pointer; border: 1px solid #D2D79F; transition: 100ms;');
        } else {
            for (const btn of rectangleCalculationBtnSectionElArray) {
                btn.removeAttribute('style');
                btn.removeAttribute('class');
                btn.setAttribute('style',
                    'cursor: pointer; border: 1px solid #D2D79F; transition: 100ms;');
            }

            e.target.classList.add('active-stat');
            e.target.setAttribute('style',
                'cursor: pointer; background-color: #b9c169;border-radius: 20px; border: 1px solid #161616;');
        }

    }
});
circleCalculationBtnSectionEl.addEventListener('click', (e) => {
    if (e.target.hasAttribute('style')) {

        if (e.target.classList.contains('active-stat')) {
            e.target.classList.remove('active-stat');
            e.target.setAttribute('style',
                'cursor: pointer; border: 1px solid #D2D79F; transition: 100ms;');
        } else {
            for (const btn of circleCalculationBtnSectionElArray) {
                btn.removeAttribute('style');
                btn.removeAttribute('class');
                btn.setAttribute('style',
                    'cursor: pointer; border: 1px solid #D2D79F; transition: 100ms;');
            }

            e.target.classList.add('active-stat');
            e.target.setAttribute('style',
                'cursor: pointer; background-color: #b9c169;border-radius: 20px; border: 1px solid #161616;');
        }

    }
});
// Stitistics button styings

// Active buttons styling
shapeBtnSectionEl.addEventListener('click', (e) => {
    if (e.target.type == 'submit') {
        for (const btn of shapeBtnSectionElArray) {
            btn.removeAttribute('style');
        }
        e.target.setAttribute('style', 'background-color: #42855B; color: #f2f2f2;');
    }
});
resultBtnSectionEl.addEventListener('click', (e) => {
    if (e.target.type == 'submit') {
        for (const btn of resultBtnSectionElArray) {
            btn.removeAttribute('style');
        }
        e.target.setAttribute('style', 'background-color: #42855B; color: #f2f2f2;');
    }
});
// Active buttons styling

// Pool shape buttons dispay setters
rectangleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleFormSectionEl.style.display = 'block';
    circleFormSectionEl.style.display = 'none';

    rectangleStatsBtnEl.style.display = 'flex';
    circleStatsBtnEl.style.display = 'none';

    resetStatisticsCircle();
    resetPoolCircle();
});
circleBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    rectangleFormSectionEl.style.display = 'none';
    circleFormSectionEl.style.display = 'block';

    rectangleStatsBtnEl.style.display = 'none';
    circleStatsBtnEl.style.display = 'flex';

    resetStatisticsRectangle();
    resetPoolRectangle();
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
