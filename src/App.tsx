import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './GlobalStyles';
import LazyLoad from './utils/LazyLoad';
import { defaultTheme } from './utils/Themes';

function GlobalPage() {
	return (
		<>
			<LazyLoad importPath="components/Header" />
			<Outlet />
			{/* TODO: footer */}
		</>
	);
}

function OtherPage({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<h1>{children}</h1>
		</div>
	);
}

function NotFoundPage() {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	const goHome = () => navigate('/');

	return (
		<div>
			Oops! Looks like you're lost..
			<br />
			Wanna go <button onClick={goBack}>back</button> or <button onClick={goHome}>home</button>?
		</div>
	);
}

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GlobalPage />}>
						<Route index element={<LazyLoad importPath="pages/Home" loading={<div>Loading...</div>} />} />

						<Route path="about" element={<OtherPage>About</OtherPage>} />
						<Route path="careers" element={<OtherPage>Careers</OtherPage>} />
						<Route path="events" element={<OtherPage>Events</OtherPage>} />
						<Route path="products" element={<OtherPage>Products</OtherPage>} />
						<Route path="support" element={<OtherPage>Support</OtherPage>} />

						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
