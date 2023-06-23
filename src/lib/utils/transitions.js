export function toTheBottle(node, { duration }) {
    return {
        duration,
        css: (t) => {
            return `
        transform: translate(-50%, ${400 - t * 400}px) scale(${t * 1});
        `;
        }
    };
}

export function fromTheBottle(node, { duration }) {
    return {
        duration,
        css: (t) => {
            return `
            transform: translate(-50%, ${400 - t * 400}px) scale(${t * 1});
        `;
        }
    };
}

export function typewriter(node, { speed = 1, delay = 0 }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
        delay,
        duration,
        tick: (t) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        }
    };
}

export function shaking(node, { duration, delay = 0 }) {
    return {
        delay,
        duration,
        css: (t) => {
            const rotationDeg = (t - 0.5) * 25;
            return `
            transform: rotate(${rotationDeg}deg);
        `;
        }
    };
}