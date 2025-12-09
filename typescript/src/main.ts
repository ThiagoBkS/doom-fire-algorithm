import DoomFire from "./DoomFire.js";
import { $ } from "./functions.js";

const doomfire = new DoomFire($("doom-fire") as HTMLCanvasElement);
doomfire.start();

document.querySelectorAll("[data-hue]").forEach((element) => {
	if (!(element instanceof HTMLElement)) return;

	const hue = element.dataset.hue;
	element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

	element.addEventListener("click", () => doomfire.changePaletteColor(hue ? parseInt(hue) : 0));
});

$("change-size").addEventListener("input", (event) => {
	doomfire.changeMatrixSize(parseInt((event.target as HTMLInputElement).value) * 4);
});

$("change-fps").addEventListener("input", (event) => {
	doomfire.changeFPS(parseInt((event.target as HTMLInputElement).value));
});

$("change-quality").addEventListener("input", event => {
	const quality = parseInt((event.target as HTMLInputElement).value);
	doomfire.changeQuality(quality, quality);
});

$("change-fire-intensity").addEventListener("input", event => {
	if (!(event.target as HTMLInputElement)) return;
	const element = event.target as HTMLInputElement;

	const invertValue = Number(element.getAttribute("max")) -  Number(element.value);
	doomfire.changeDecayIntensity(invertValue + 2);
});

document.querySelectorAll("[data-direction]").forEach(element => {
	if (!(element instanceof HTMLElement)) return;
	element.addEventListener("click", () => doomfire.changeWindDirection(String(element.dataset.direction)));
});
