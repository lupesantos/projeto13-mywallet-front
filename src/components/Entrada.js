import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Entrada() {
	const { email, setEmail, password, setPassword, setToken, setName } =
		useContext(UserContext);

	const navigate = useNavigate();
	function postLogin(event) {
		event.preventDefault();

		const dados = {
			email: email,
			password: password,
		};

		const requisicao = axios.post('http://localhost:5000/login', dados);
		requisicao
			.then((response) => {
				setToken(response.data.token);
				setName(response.data.name);
				navigate('/ola');
			})
			.catch(deuRuim);
	}

	function deuRuim(response) {
		alert(response.response.data);
	}

	return (
		<Container>
			<p>MyWallet</p>

			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='E-mail'
			/>
			<input
				type='text'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Senha'
			/>

			<Entrar onClick={postLogin}>Entrar</Entrar>

			<Link to='/cadastro'>
				<Cadastrar>Primeira vez? Cadastre-se!</Cadastrar>
			</Link>
		</Container>
	);
}

const Container = styled.div`
	background-color: #8c11be;
	width: 375px;
	height: 667px;
	color: white;
	font-size: 32px;
	border: 1px solid grey; /*TEMPORARIO*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	a:visited {
		color: white;
	}

	p {
		font-family: 'Saira Stencil One', cursive;
	}

	input::placeholder {
		color: grey;
	}

	input {
		padding-left: 20px;
		margin: 4px 0;
		width: 326px;
		height: 58px;
		border: solid 1px #d5d5d5;
		border-radius: 5px;
		outline-width: 0;
		font-size: 20px;
		font-weight: 400;
		font-style: normal;

		color: darkgrey;
	}
`;

const Entrar = styled.div`
	width: 326px;
	height: 46px;
	background-color: #a328d6;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;
const Cadastrar = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-top: 10px;
`;
