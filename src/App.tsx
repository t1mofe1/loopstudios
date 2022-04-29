import { Header } from './components/Header';
import { Section1 } from './components/Section1';
import { MaxWidthContext } from './context/MaxWidth';

function App() {
	return (
		<MaxWidthContext.Provider value="1200px">
			<Header />
			<Section1 />
		</MaxWidthContext.Provider>
	);
}

export default App;
