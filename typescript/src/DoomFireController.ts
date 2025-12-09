interface DoomFireController {
    start(): void;
    changeMatrixSize(matrixSize: Number): void
    changeFPS(fps: number): void
    changeQuality(height: number, width: number): void
    changeDecayIntensity(decay: number): void
    changePaletteColor(hue: number): void
    changePixelIntensity(row: number, column: number, newIntensity: number): void
    changeWindDirection(direction: String): void
}