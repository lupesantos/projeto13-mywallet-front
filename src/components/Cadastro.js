import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Cadastro() {
	return (
		<Container>
			<p>MyWallet</p>
			<input
				type='text'
				// value={email}
				// onChange={(e) => setEmail(e.target.value)}
				placeholder='Nome'
			/>
			<input
				type='text'
				// value={email}
				// onChange={(e) => setEmail(e.target.value)}
				placeholder='E-mail'
			/>
			<input
				type='text'
				// value={password}
				// onChange={(e) => setPassword(e.target.value)}
				placeholder='Senha'
			/>

			<input
				type='text'
				// value={password}
				// onChange={(e) => setPassword(e.target.value)}
				placeholder='Confirme a Senha'
			/>
			<Link to='/'>
				<Cadastrar>Cadastrar</Cadastrar>
			</Link>

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
`;
const EntreAgora = styled.div`
	font-size: 15px;
	font-weight: 700;
`;
