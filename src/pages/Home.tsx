import LazyLoad from '../utils/LazyLoad';

export default function Home() {
	return (
		<>
			<LazyLoad loading={<div>Loading section1</div>} importPath="components/Section1" />
		</>
	);
}
