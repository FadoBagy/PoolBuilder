export function animateNumbers(element, unit, value) {
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