export enum Fonts {
	Alata = 'Alata',
	JosefinSans = 'Josefin Sans',
}

export type Font<T extends Fonts> = `font-family: ${T}, sans-serif;`;

export function getFont<T extends Fonts>(font: T): Font<T> {
	return `font-family: ${font}, sans-serif;`;
}
