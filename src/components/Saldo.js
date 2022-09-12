import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

export default function Saldo() {
	const { extrato } = useContext(UserContext);
	let saldo3 = 0;

	let credito = extrato.filter((value) => value.type === 'entrada');
	let debito = extrato.filter((value) => value.type === 'saida');

	saldo3 = somaArray(credito) - somaArray(debito);

	let saldo5 = saldo3.toFixed(2);

	function somaArray(array) {
		let soma = 0;

		for (let i = 0; i < array.length; i++) {
			let aux = Number(array[i].valor);
			soma += aux;
		}
		return soma;
	}

	if (saldo3 > 0) {
		return (
			<Saldo2>
				<h1>Saldo</h1>

				<p>R$ {saldo5}</p>
			</Saldo2>
		);
	} else {
		return (
			<Saldo4>
				<h1>Saldo</h1>

				<p>R$ {saldo5}</p>
			</Saldo4>
		);
	}
}

const Saldo2 = styled.div`
	width: 306px;
	height: 50px;
	color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 17px;
		font-weight: 400;
		color: #03ac00;
	}
`;
const Saldo4 = styled.div`
	width: 306px;
	height: 50px;
	color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 17px;
		font-weight: 400;
		color: #c70000;
	}
`;
