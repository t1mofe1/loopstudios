import { createContext } from 'react';

export const MaxWidthContext = createContext('1200px');

export type MaxWidthProp = {
	maxWidth: string;
};
