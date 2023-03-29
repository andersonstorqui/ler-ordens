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
	dateLabel,
	dateInputProps,
	historicoLabel,
	historicoInputProps,
	clienteLabel,
	clienteInputProps,
	categoriasLabel,
	categoriasInputProps,
	entradasLabel,
	entradasInputProps,
	saidasLabel,
	saidasInputProps,
	marcadoresLabel,
	marcadoresInputProps,
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
		<Card title="Novo preços">
			<form onSubmit={handleSubmit(onSubmit)} {...restProps}>
				<Row>
					<Col xl={6} lg={3} md={12}>
						<InputLabel
							label={dateLabel}
							{...dateInputProps}
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
				<Row>
					<Col xl={6} lg={4} md={12}>
						<SelectLabel
							label={clienteLabel}
							{...clienteInputProps}
							options={[
								{ id: 1, name: 'Modelo' },
								{ id: 2, name: 'Fante' },
							]}
							// value={active.selectedOption}
							onChange={target =>
								handleChange(target, setActive, 'active')
							}
						/>
					</Col>
					<Col xl={6} lg={4} md={12}>
						<SelectLabel
							label={categoriasLabel}
							{...categoriasInputProps}
							options={[
								{ id: 1, name: 'categoria 1' },
								{ id: 2, name: 'categoria 2' },
								{ id: 3, name: 'categoria 3' },
							]}
							// value={clientPerfil.selectedOption}
							onChange={target =>
								handleChange(target, setClientPerfil, 'cliente')
							}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={4} lg={3} md={12}>
						<InputLabel
							label={entradasLabel}
							{...entradasInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={3} md={12}>
						<InputLabel
							label={saidasLabel}
							{...saidasInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={3} md={12}>
						<InputLabel
							label={marcadoresLabel}
							{...marcadoresInputProps}
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
	clientLabel: PropTypes.string,
	clientInputProps: PropTypes.shape({}),
	contractLabel: PropTypes.string,
	contractInputProps: PropTypes.shape({}),
	anoLabel: PropTypes.string,
	anoInputProps: PropTypes.shape({}),
	dateReajustLabel: PropTypes.string,
	dateReajustInputProps: PropTypes.shape({}),
	priceBaseLabel: PropTypes.string,
	priceBaseInputProps: PropTypes.shape({}),
	priceReajustLabel: PropTypes.string,
	priceReajustInputProps: PropTypes.shape({}),
	dateLabel: PropTypes.string,
	dateInputProps: PropTypes.shape({}),
	historicoLabel: PropTypes.string,
	historicoInputProps: PropTypes.shape({}),
	clienteLabel: PropTypes.string,
	clienteInputProps: PropTypes.shape({}),
	categoriasLabel: PropTypes.string,
	categoriasInputProps: PropTypes.shape({}),
	entradasLabel: PropTypes.string,
	entradasInputProps: PropTypes.shape({}),
	saidasLabel: PropTypes.string,
	saidasInputProps: PropTypes.shape({}),
	marcadoresLabel: PropTypes.string,
	marcadoresInputProps: PropTypes.shape({}),
	btnLabelSubmit: PropTypes.string,
	btnLabelCancel: PropTypes.string,
	handleNavigation: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
};

FormPrices.defaultProps = {
	// activeLabel: 'Ativo',
	// activeInputProps: {
	// 	name: 'active',
	// 	id: 'active',
	// },
	dateLabel: 'Data',
	dateInputProps: {
		name: 'cliente',
		id: 'cliente',
	},
	historicoLabel: 'Histórico',
	historicoInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'Insira um historico',
	},
	clienteLabel: 'Cliente',
	clienteInputProps: {
		name: 'cliente',
		id: 'cliente',
	},
	categoriasLabel: 'Categoria',
	categoriasInputProps: {
		name: 'cliente',
		id: 'cliente',
	},
	entradasLabel: 'Entradas',
	entradasInputProps: {
		type: 'number',
		name: 'cliente',
		id: 'cliente',
		placeholder: 'Insira um valor',
	},
	saidasLabel: 'Saídas',
	saidasInputProps: {
		name: 'cliente',
		id: 'cliente',
		type: 'number',
		placeholder: 'Insira um valor',
	},
	marcadoresLabel: 'Marcadores',
	dateInputProps: {
		name: 'cliente',
		id: 'cliente',
		placeholder: 'Marcadores',
	},

	btnLabelSubmit: 'Salvar',
	btnLabelCancel: 'Cancelar',
};

export default FormPrices;
