export function generateHSLPalette(hue: number, steps: number): Array<string> {
	return Array.from({ length: steps }, (_, step) => {
		const lightness = 5 + (95 * step) / (steps - 1);
		return `hsl(${hue}, 100%, ${Math.min(lightness ?? Infinity, 100)}%)`;
	});
}

export function $<T extends HTMLElement = HTMLElement>(id: string): T {
	const element = document.getElementById(id);
	if (!element)
		throw new Error(`Element with id "${id}" not found`);

	return element as T;
}