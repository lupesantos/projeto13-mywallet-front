import '../assets/css/reset.css';
import '../assets/css/style.css';
import Cadastro from './Cadastro';
import Entrada from './Entrada';
import Ola from './Ola';
import NewInn from './NewInn';
import NewOut from './NewOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Entrada />} />
					<Route path='/cadastro' element={<Cadastro />} />
					<Route path='/ola' element={<Ola />} />
					<Route path='/novaentrada' element={<NewInn />} />
					<Route path='/novasaida' element={<NewOut />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
