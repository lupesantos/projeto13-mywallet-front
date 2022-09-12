import styled from 'styled-components';
import { Link } from 'react-router-dom';
import setinha from '../assets/images/Vector.png';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import { useEffect } from 'react';
import InnOut from './InnOut';
import Saldo from './Saldo';
import { useNavigate } from 'react-router-dom';

export default function Ola() {
	const { token, extrato, setExtrato, name, clicked } = useContext(UserContext);
	const navigate = useNavigate();

	console.log(token);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const requisicao = axios.get('http://localhost:5000/extrato', config);
		requisicao
			.then((response) => {
				setExtrato(response.data);
			})
			.catch(deuRuim);
	}, [clicked]);

	function deuRuim() {
		console.log('Deu RUIM!!!');
	}

	function deuBom() {
		console.log('Deu Bom!!!');
	}

	function putDesloga(event) {
		event.preventDefault();

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const requisicao = axios.delete('http://localhost:5000/delete', config);
		requisicao.then(deuBom).catch(deuRuim);

		navigate('/');
	}

	return (
		<Container>
			<Header>
				<h1>Olá, {name}</h1>

				<img src={setinha} onClick={putDesloga} alt='oi' />
			</Header>
			{extrato.length === 0 ? (
				<Registros>
					<NaoReg>Não há registros de entrada ou saída</NaoReg>
				</Registros>
			) : (
				<Registros>
					<ListaRegistros>
						{extrato.map((item, index) => (
							<InnOut
								key={index}
								valor={item.valor}
								descricao={item.descricao}
								type={item.type}
								dia={item.dia}
							/>
						))}
					</ListaRegistros>

					<Saldo />
				</Registros>
			)}

			<div>
				<Link to='/novaentrada'>
					<Nova>Nova entrada</Nova>
				</Link>
				<Link to='/novasaida'>
					<Nova>Nova saída</Nova>
				</Link>
			</div>
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
	justify-content: space-between;
	align-items: center;

	a:visited {
		color: white;
	}
	div {
		display: flex;
	}
`;

const Registros = styled.div`
	width: 326px;
	height: 446px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	margin-top: 10px;
`;
const Nova = styled.div`
	width: 155px;
	height: 114px;
	background-color: #a328d6;
	border-radius: 5px;
	font-size: 17px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 10px;
`;

const NaoReg = styled.div`
	color: #868686;

	font-size: 20px;
	font-weight: 400;
`;

const Header = styled.div`
	width: 326px;
	display: flex;
	margin-top: 20px;
	justify-content: space-between;

	img {
		width: 26px;
		height: 26px;
	}
`;

const ListaRegistros = styled.div`
	width: 326px;
	height: 396px;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
`;
