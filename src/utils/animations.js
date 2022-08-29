export function animateStatistics(element, calculation, unit) {
    let speed = 700;
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / speed, 1);
        element.innerHTML = Math.floor(progress * (calculation - 0) + 0).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + ` ${unit}`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    window.requestAnimationFrame(step);
}
