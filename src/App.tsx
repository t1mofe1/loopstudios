import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MaxWidthContext } from './context/MaxWidth';
import { Home } from './pages/Home';

function App() {
	return (
		<MaxWidthContext.Provider value="1200px">
			<BrowserRouter>
				<Routes>
					{/* TODO: add Global route for not implementing header and else stuff in every single route page */}
					<Route path="/" element={<Home />} />

					<Route path="about" element={<div>About</div>} />
					<Route path="careers" element={<div>Careers</div>} />
					<Route path="events" element={<div>Events</div>} />
					<Route path="products" element={<div>Products</div>} />
					<Route path="support" element={<div>Support</div>} />
				</Routes>
			</BrowserRouter>
		</MaxWidthContext.Provider>
	);
}

export default App;
