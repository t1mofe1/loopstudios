import { lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';

type LazyLoadCallback = (component: LazyExoticComponent<() => JSX.Element>) => JSX.Element;
type LazyLoadProps = {
	callback?: LazyLoadCallback;
	importPath: string;
	loading?: ReactNode;
};

const defaultCallback: LazyLoadCallback = (LoadedComponent) => {
	return <LoadedComponent />;
};

/**
 * Import path must be relative to src/
 */
export default function LazyLoad({ callback: _callback, loading, importPath }: LazyLoadProps) {
	const Component: LazyExoticComponent<() => JSX.Element> = lazy(() => import(`../${importPath}`));

	const callback = _callback ?? defaultCallback;

	return <Suspense fallback={loading}>{callback(Component)}</Suspense>;
}
