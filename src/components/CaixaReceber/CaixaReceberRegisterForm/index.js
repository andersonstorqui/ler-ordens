import React, { useState } from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import { useForm } from 'react-hook-form';
import PropTypes from '../../../lib/utils/propTypes';
import Card from '../../Utils/Card/FormCard';
import { InputLabel, SelectLabel } from '../../Utils';

const FormPrices = ({
	activeLabel,
	activeInputProps,
	clientLabel,
	clientInputProps,
	contractLabel,
	contractInputProps,
	anoLabel,
	anoInputProps,
	dateReajustLabel,
	dateReajustInputProps,
	priceBaseLabel,
	priceBaseInputProps,
	priceReajustLabel,
	priceReajustInputProps,
	list,
	client,
	contracts,
	onSubmit,
	handleNavigation,
	tipoFornecedorLabel,
	tipoFornecedorInputProps,
	documentoInputProps,
	documentoLabel,
	vencimentoLabel,
	vencimentoInputProps,
	valorPagoInputProps,
	valorPagarLabel,
	saldoInputProps,
	saldoLabel,
	valorhaPagoInputProps,
	valorPagoLabel,
	historicoInputProps,
	historicoLabel,
	btnLabelCancel,
	btnLabelSubmit,
	...restProps
}) => {
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: list,
	});

	//functions
	const handleChange = (selectedOption, func, value) => {
		setValue(value, selectedOption.id);
		func({ selectedOption });
	};

	//VARS
	const [active, setActive] = useState({ selectedOption: {} });
	const [clientPerfil, setClientPerfil] = useState({ selectedOption: {} });
	const [contractCode, setContractCode] = useState({ selectedOption: {} });

	React.useEffect(() => {
		//status
		let status;
		if (list && list.active === false) {
			status = { id: false, name: 'Inativo' };
			handleChange(status, setActive, 'active');
		} else {
			status = { id: true, name: 'Ativo' };
			handleChange(status, setActive, 'active');
		}
		//clientes
		let clientes;
		if (list && list.cliente) {
			clientes = client.filter(cliente => cliente.id == list.cliente)[0];
			handleChange(client, setClientPerfil, 'cliente');
		}
		//contrato
		let contratos;
		if (list && list.cod_contract) {
			contratos = contracts.filter(contracts => contracts.id)[0];
			handleChange(contratos, setContractCode, 'cod_contract');
		}
	}, [list]);

	React.useEffect(() => {
		register({ name: 'active' });
		register({ name: 'cliente' });
		register({ name: 'cod_contract' });
	}, [register]);

	return (
		<Card title="Nova conta a receber">
			<form onSubmit={handleSubmit(onSubmit)} {...restProps}>
				{/* <Row>
					<Col xl={4} lg={4} md={12}>
						<SelectLabel
							label={activeLabel}
							{...activeInputProps}
							options={[{ id: true, name: 'Ativo' }, { id: false, name: 'Inativo' }]}
							value={active.selectedOption}
							onChange={target => handleChange(target, setActive, 'active')}
						/>
					</Col>
					<Col xl={4} lg={4} md={12}>
						<SelectLabel
							label={clientLabel}
							{...clientInputProps}
							options={client}
							value={clientPerfil.selectedOption}
							onChange={target => handleChange(target, setClientPerfil, 'cliente')}
						/>
					</Col>
					<Col xl={4} lg={4} md={12}>
						<SelectLabel
							label={contractLabel}
							{...contractInputProps}
							options={contracts}
							value={contractCode.selectedOption}
							onChange={target => handleChange(target, setContractCode, 'cod_contract')}
						/>
					</Col>
				</Row>*/}
				<Row>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={tipoFornecedorLabel}
							{...tipoFornecedorInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={historicoLabel}
							{...historicoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				.
				<Row>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={documentoLabel}
							{...documentoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={vencimentoLabel}
							{...vencimentoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={valorPagarLabel}
							{...valorPagoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={saldoLabel}
							{...saldoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={valorPagoLabel}
							{...valorhaPagoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Button
					color="danger"
					outline
					className="float-left col-md-2 mt-3"
					onClick={() => handleNavigation()}>
					{btnLabelCancel}
				</Button>
				<Button
					color="success"
					outline
					type="submit"
					className="float-right col-md-2 mt-3">
					{btnLabelSubmit}
				</Button>
			</form>
		</Card>
	);
};

FormPrices.propTypes = {
	activeLabel: PropTypes.string,
	activeInputProps: PropTypes.shape({}),
	tipoFornecedorLabel: PropTypes.string,
	tipoFornecedorInputProps: PropTypes.shape({}),
	historicoLabel: PropTypes.string,
	historicoInputProps: PropTypes.shape({}),
	documentoLabel: PropTypes.string,
	documentoInputProps: PropTypes.shape({}),
	vencimentoLabel: PropTypes.string,
	vencimentoInputProps: PropTypes.shape({}),
	valorPagarLabel: PropTypes.string,
	valorPagoInputProps: PropTypes.shape({}),
	saldoLabel: PropTypes.string,
	saldoInputProps: PropTypes.shape({}),
	valorPagoLabel: PropTypes.string,
	valorhaPagoInputProps: PropTypes.shape({}),
	btnLabelSubmit: PropTypes.string,
	btnLabelCancel: PropTypes.string,
	handleNavigation: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
};

FormPrices.defaultProps = {
	activeLabel: 'Ativo',
	activeInputProps: {
		name: 'active',
		id: 'active',
	},
	tipoFornecedorLabel: 'Tipo Fornecedor',
	tipoFornecedorInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'Tipo Fornecedor',
	},
	historicoLabel: 'Histórico',
	historicoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'Serviço prestado',
	},
	documentoLabel: 'Nº documento',
	documentoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: '0001/01',
	},
	vencimentoLabel: 'Vencimento',
	vencimentoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: '29/08/2022',
	},
	valorPagarLabel: 'Valor a pagar',
	valorPagoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'R$200',
	},
	saldoLabel: 'Saldo',
	saldoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'R$10.000',
	},
	valorPagoLabel: 'Valor pago',
	valorhaPagoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'R$2000',
	},
	btnLabelSubmit: 'Salvar',
	btnLabelCancel: 'Cancelar',
};

export default FormPrices;
