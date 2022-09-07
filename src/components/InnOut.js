import styled from 'styled-components';

export default function InnOut({ index, valor, descricao, type }) {
	return (
		<InnOutContainer>
			<Dia>
				<h1>25/10</h1>
			</Dia>
			<InnOutContainer2>
				<Descricao>
					<h1>{descricao}</h1>
				</Descricao>
				<Valor type={type}>
					<h1>{valor}</h1>
				</Valor>
			</InnOutContainer2>
		</InnOutContainer>
	);
}
const Descricao = styled.div`
	color: black;
	font-size: 16px;
	font-weight: 400;
`;

const Valor = styled.div`
	color: ${({ type }) => (type === 'saida' ? '#c70000' : '#03AC00')};
	font-size: 16px;
	font-weight: 400;
`;

const InnOutContainer = styled.div`
	width: 310px;
	height: 25px;
	color: #c70000;
	display: flex;
	justify-content: flex-start;
	font-size: 16px;
	font-weight: 400;
	margin-top: 10px;
	gap: 10px;
`;

const InnOutContainer2 = styled.div`
	width: 250px;
	height: 25px;
	color: #c70000;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 400;
`;

const Dia = styled.div`
	font-size: 16px;
	font-weight: 400px;
	color: #c6c6c6;
`;
