import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NewInn() {
	return (
		<Container>
			Nova entrada
			<input
				type='text'
				// value={email}
				// onChange={(e) => setEmail(e.target.value)}
				placeholder='Valor'
			/>
			<input
				type='text'
				// value={password}
				// onChange={(e) => setPassword(e.target.value)}
				placeholder='Descrição'
			/>
			<Link to='/ola'>
				<Salvar>Salvar entrada</Salvar>
			</Link>
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
		color: #000000;
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

		color: #dbdbdb;
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
