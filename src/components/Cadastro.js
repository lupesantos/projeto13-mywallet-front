import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
	const {
		email,
		setEmail,
		name,
		setName,
		password,
		setPassword,
		confirm,
		setConfirm,
	} = useContext(UserContext);

	const navigate = useNavigate();

	function postCadastro(event) {
		event.preventDefault();

		const dados = {
			email: email,
			name: name,
			password: password,
			confirm: confirm,
		};

		const requisicao = axios.post('http://localhost:5000/cadastro', dados);
		requisicao.then(deuBom).catch(deuRuim);

		navigate('/');
	}

	function deuBom() {
		console.log('Deu BOM!!!');
	}

	function deuRuim(response) {
		alert(response.response.data);
	}

	return (
		<Container>
			<p>MyWallet</p>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Nome'
			/>
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

			<input
				type='text'
				value={confirm}
				onChange={(e) => setConfirm(e.target.value)}
				placeholder='Confirme a Senha'
			/>

			<Cadastrar onClick={postCadastro}>Cadastrar</Cadastrar>

			<Link to='/'>
				<EntreAgora>Já tem uma conta? Entre agora!</EntreAgora>
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

	p {
		font-family: 'Saira Stencil One', cursive;
	}

	a:visited {
		color: white;
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

		color: darkgray;
	}
`;

const Cadastrar = styled.div`
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
const EntreAgora = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-top: 10px;
`;
