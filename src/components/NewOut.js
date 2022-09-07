import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

export default function NewOut() {
	const {
		valor,
		setValor,
		descricao,
		setDescricao,
		token,
		setClicked,
		clicked,
	} = useContext(UserContext);

	const navigate = useNavigate();

	function postSaida(event) {
		event.preventDefault();

		const dados = {
			valor: valor,
			descricao: descricao,
		};

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		console.log(dados);
		console.log(config);

		const requisicao = axios.post(
			'http://localhost:5000/nova-saida',
			dados,
			config
		);
		requisicao
			.then((response) => {
				console.log(response.data);
				setClicked(!clicked);
			})
			.catch(deuRuim);

		navigate('/ola');
	}

	function deuRuim() {
		console.log('Deu RUIM!!!');
	}
	return (
		<Container>
			Nova saída
			<input
				type='text'
				value={valor}
				onChange={(e) => setValor(e.target.value)}
				placeholder='Valor'
			/>
			<input
				type='text'
				value={descricao}
				onChange={(e) => setDescricao(e.target.value)}
				placeholder='Descrição'
			/>
			<Salvar onClick={postSaida}>Salvar saída</Salvar>
		</Container>
	);
}

const Container = styled.div`
	background-color: #8c11be;
	width: 375px;
	height: 667px;
	color: white;
	font-size: 26px;
	font-weight: 700;
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

const Salvar = styled.div`
	width: 326px;
	height: 46px;
	background-color: #a328d6;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
`;
