import '../assets/css/reset.css';
import '../assets/css/style.css';
import Cadastro from './Cadastro';
import Entrada from './Entrada';
import Ola from './Ola';
import NewInn from './NewInn';
import NewOut from './NewOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useState } from 'react';

function App() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [token, setToken] = useState({});
	const [valor, setValor] = useState('');
	const [descricao, setDescricao] = useState('');
	const [extrato, setExtrato] = useState('');
	const [clicked, setClicked] = useState(true);
	const [saldo, setSaldo] = useState(0);

	return (
		<div>
			<UserContext.Provider
				value={{
					email,
					setEmail,
					name,
					setName,
					password,
					setPassword,
					confirm,
					setConfirm,
					token,
					setToken,
					valor,
					setValor,
					descricao,
					setDescricao,
					extrato,
					setExtrato,
					clicked,
					setClicked,
					saldo,
					setSaldo,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Entrada />} />
						<Route path='/cadastro' element={<Cadastro />} />
						<Route path='/ola' element={<Ola />} />
						<Route path='/novaentrada' element={<NewInn />} />
						<Route path='/novasaida' element={<NewOut />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
