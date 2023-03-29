import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import PropTypes from '../../../lib/utils/propTypes';
import Card from '../../Utils/Card/FormCard';
import { Checkbox, InputLabel, SelectLabel } from '../../Utils';

const FormUser = ({
	userLabel,
	userInputProps,
	emailLabel,
	emailInputProps,
	firstNameLabel,
	firstNameInputProps,
	lastNameLabel,
	lastNameInputProps,
	companyLabel,
	companyInputProps,
	interLoginLabel,
	interLoginInputProps,
	extraIdLabel,
	extraIdInputProps,
	groupLabel,
	groupInputProps,
	activeLabel,
	activeInputProps,
	typeLabel,
	typeInputProps,
	passwordLabel,
	passwordInputProps,
	confirmLabel,
	confirmInputProps,
	btnLabelSubmit,
	btnLabelCancel,
	handleNavigation,
	onSubmit,
	user,
	edit,
	companiesList,
	groups,
	representatives,
	rgLabel,
	rgInputProps,
	documentoInputProps,
	documentoLabel,
	dateLabel,
	dateInputProps,
	emailMvNameLabel,
	emailMvInputProps,
	// emailGoogleNameLabel,
	// emailGoogleInputProps,
	telefoneFixoLabel,
	telefoneFixoInputProps,
	celularLabel,
	celularInputProps,
	perfilLabel,
	perfilInputProps,
	statusLabel,
	statusInputProps,
	bancoLabel,
	bancoInputProps,
	agenciaLabel,
	agenciaInputProps,
	tipoContaLabel,
	tipoContaInputProps,
	contaLabel,
	contaInputProps,
	enderecoLabel,
	enderecoInputProps,
	numeroLabel,
	numeroInputProps,
	complementoLabel,
	complementoInputProps,
	bairroLabel,
	bairroInputProps,
	estadoLabel,
	estadoInputProps,
	cidadeLabel,
	cidadeInputProps,
	parceiroLabel,
	parceiroInputProps,
	fotoLabel,
	fotoInputProps,
	...restProps
}) => {
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: user,
	});
	const [companies, setCompanyValue] = useState({
		selectedOption: user.companies,
	});

	let extraId = '';
	if (user.group) {
		if (user.group.id === 5 && user.extra_id) {
			const value = parseInt(user.extra_id, 10);
			extraId = representatives.find(x => x.id === value);
		}
	}

	const [representative, setRepresentative] = useState({
		selectedOption: extraId,
	});

	const [group, setGroupValue] = useState({ selectedOption: user.group });

	const handleMultiChange = selectedOption => {
		setValue('companies', selectedOption);
		setCompanyValue({ selectedOption });
	};

	const handleChange = selectedOption => {
		setValue('group.id', selectedOption.id);
		setGroupValue({ selectedOption });
	};

	const handleChangeRepresentative = selectedOption => {
		setValue(
			'extra_id',
			selectedOption !== null ? selectedOption.id : selectedOption,
		);
		setRepresentative({ selectedOption });
	};

	React.useEffect(() => {
		register({ name: 'companies' }, { required: true });
		register({ name: 'group.id' });
		register({ name: 'extra_id' });
	}, [register]);

	return (
		<Card title="Nova usuário">
			<form onSubmit={handleSubmit(onSubmit)} {...restProps}>
				<Row>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={firstNameLabel}
							{...firstNameInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={lastNameLabel}
							{...lastNameInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={dateLabel}
							{...dateInputProps}
							innerRef={register}
							// options={companiesList}
							// value={companies.selectedOption}
							// onChange={handleMultiChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={userLabel}
							{...userInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={emailLabel}
							{...emailInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={emailMvNameLabel}
							{...emailMvInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={documentoLabel}
							{...documentoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={rgLabel}
							{...rgInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={perfilLabel}
							{...perfilInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={2} lg={12} md={12}>
						<InputLabel
							label={statusLabel}
							{...statusInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={bancoLabel}
							{...bancoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={tipoContaLabel}
							{...tipoContaInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={contaLabel}
							{...contaInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={agenciaLabel}
							{...agenciaInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={4} lg={12} md={12}>
						<InputLabel
							label={enderecoLabel}
							{...enderecoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={2} lg={12} md={12}>
						<InputLabel
							label={numeroLabel}
							{...numeroInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={bairroLabel}
							{...bairroInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={complementoLabel}
							{...complementoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={cidadeLabel}
							{...cidadeInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={estadoLabel}
							{...estadoInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={telefoneFixoLabel}
							{...telefoneFixoInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<InputLabel
							label={celularLabel}
							{...celularInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={12} md={12}>
						<InputLabel
							label={parceiroLabel}
							{...parceiroInputProps}
							innerRef={register}
						/>
					</Col>

					<Col xl={6} lg={12} md={12}>
						<SelectLabel
							label={companyLabel}
							{...companyInputProps}
							options={companiesList}
							value={companies.selectedOption}
							onChange={handleMultiChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={12} md={12}>
						{/* <InputLabel
							label={extraIdLabel}
							{...extraIdInputProps}
							innerRef={register}
						/> */}
						<SelectLabel
							label={groupLabel}
							{...groupInputProps}
							options={groups}
							onChange={handleChange}
							value={group.selectedOption}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<Checkbox
							{...activeInputProps}
							innerRef={register}
							label={activeLabel}
						/>
					</Col>
					<Col xl={3} lg={12} md={12}>
						<Checkbox
							{...typeInputProps}
							innerRef={register}
							label={typeLabel}
						/>
					</Col>
				</Row>
				{group.selectedOption && (
					<Row>
						{group.selectedOption.id === 5 && (
							<Col xl={6} lg={12} md={12}>
								<SelectLabel
									label={extraIdLabel}
									{...extraIdInputProps}
									options={representatives}
									value={representative.selectedOption}
									onChange={handleChangeRepresentative}
									isClearable
								/>
							</Col>
						)}
					</Row>
				)}

				<Row>
					<Col xl={6} lg={12} md={12}>
						<InputLabel
							label={fotoLabel}
							{...fotoInputProps}
							innerRef={register}
						/>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={12} md={12}>
						<InputLabel
							label={passwordLabel}
							required={!edit}
							{...passwordInputProps}
							innerRef={register}
						/>
					</Col>
					<Col xl={6} lg={12} md={12}>
						<InputLabel
							required={!edit}
							label={confirmLabel}
							{...confirmInputProps}
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

FormUser.propTypes = {
	userLabel: PropTypes.string,
	userInputProps: PropTypes.shape({}),
	emailLabel: PropTypes.string,
	emailInputProps: PropTypes.shape({}),
	firstNameLabel: PropTypes.string,
	firstNameInputProps: PropTypes.shape({}),
	lastNameLabel: PropTypes.string,
	lastNameInputProps: PropTypes.shape({}),
	companyLabel: PropTypes.string,
	companyInputProps: PropTypes.shape({}),
	interLoginLabel: PropTypes.string,
	interLoginInputProps: PropTypes.shape({}),
	extraIdLabel: PropTypes.string,
	extraIdInputProps: PropTypes.shape({}),
	groupLabel: PropTypes.string,
	groupInputProps: PropTypes.shape({}),
	typeLabel: PropTypes.string,
	typeInputProps: PropTypes.shape({}),
	activeLabel: PropTypes.string,
	activeInputProps: PropTypes.shape({}),
	passwordLabel: PropTypes.string,
	passwordInputProps: PropTypes.shape({}),
	confirmLabel: PropTypes.string,
	confirmInputProps: PropTypes.shape({}),
	documentoLabel: PropTypes.string,
	documentoInputProps: PropTypes.shape({}),
	rgLabel: PropTypes.string,
	rgInputProps: PropTypes.shape({}),
	dateLabel: PropTypes.string,
	dateInputProps: PropTypes.shape({}),
	emailMvNameLabel: PropTypes.string,
	emailMvInputProps: PropTypes.shape({}),
	// emailGoogleNameLabel: PropTypes.string,
	// emailGoogleInputProps: PropTypes.shape({}),
	telefoneFixoLabel: PropTypes.string,
	telefoneFixoInputProps: PropTypes.shape({}),
	celularLabel: PropTypes.string,
	celularInputProps: PropTypes.shape({}),
	perfilLabel: PropTypes.string,
	perfilInputProps: PropTypes.shape({}),
	statusLabel: PropTypes.string,
	statusInputProps: PropTypes.shape({}),
	bancoLabel: PropTypes.string,
	bancoInputProps: PropTypes.shape({}),
	agenciaLabel: PropTypes.string,
	agenciaInputProps: PropTypes.shape({}),
	tipoContaLabel: PropTypes.string,
	tipoContaInputProps: PropTypes.shape({}),
	contaLabel: PropTypes.string,
	contaInputProps: PropTypes.shape({}),
	enderecoLabel: PropTypes.string,
	enderecoInputProps: PropTypes.shape({}),
	numeroLabel: PropTypes.string,
	numeroInputProps: PropTypes.shape({}),
	complementoLabel: PropTypes.string,
	complementoInputProps: PropTypes.shape({}),
	bairroLabel: PropTypes.string,
	bairroInputProps: PropTypes.shape({}),
	estadoLabel: PropTypes.string,
	estadoInputProps: PropTypes.shape({}),
	cidadeLabel: PropTypes.string,
	cidadeInputProps: PropTypes.shape({}),
	parceiroLabel: PropTypes.string,
	parceiroInputProps: PropTypes.shape({}),
	fotoLabel: PropTypes.string,
	fotoInputProps: PropTypes.shape({}),
	btnLabelSubmit: PropTypes.string,
	btnLabelCancel: PropTypes.string,
	handleNavigation: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
	companiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
	user: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({ group: PropTypes.object }),
	]).isRequired,
	groups: PropTypes.arrayOf(PropTypes.object).isRequired,
	representatives: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FormUser.defaultProps = {
	userLabel: 'Usuário',
	userInputProps: {
		name: 'username',
		id: 'username',
		placeholder: 'usuário',
		required: true,
	},
	emailLabel: 'Email',
	emailInputProps: {
		name: 'email',
		id: 'email',
		type: 'email',
		placeholder: 'email(mv)',
		required: true,
	},
	lastNameLabel: 'Sobrenome',
	lastNameInputProps: {
		name: 'last_name',
		id: 'last_name',
		placeholder: 'sobrenome',
		required: true,
	},
	firstNameLabel: 'Nome',
	firstNameInputProps: {
		name: 'first_name',
		id: 'first_name',
		placeholder: 'nome',
		required: true,
	},
	companyLabel: 'Empresa',
	companyInputProps: {
		name: 'company',
		id: 'company',
		placeholder: 'selecione a empresa',
		required: true,
		isMulti: 'true',
	},
	interLoginLabel: 'Usuário AD',
	interLoginInputProps: {
		name: 'internal_login',
		id: 'internalLogin',
	},
	extraIdLabel: 'Representante ERP',
	extraIdInputProps: {
		type: 'number',
		name: 'extra_id',
		id: 'extra_id',
		placeholder: 'selecione um representante',
	},
	groupLabel: 'Grupo de permissões',
	groupInputProps: {
		name: 'group',
		id: 'group',
		placeholder: 'selecione o grupo de permissões',
	},
	typeLabel: 'Administrador',
	typeInputProps: {
		name: 'is_superuser',
		id: 'is_superuser',
	},
	activeLabel: 'Ativo',
	activeInputProps: {
		name: 'active',
		id: 'active',
	},
	passwordLabel: 'Senha',
	passwordInputProps: {
		name: 'password',
		id: 'password',
		type: 'password',
		placeholder: 'senha',
	},
	confirmLabel: 'Confirmar Senha',
	confirmInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'password',
		placeholder: 'confirmar senha',
	},
	documentoLabel: 'Documento',
	documentoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'password',
		placeholder: 'Documento/CPF',
	},
	rgLabel: 'RG',
	rgInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'password',
		placeholder: 'Identidade',
	},
	dateLabel: 'Data nascimento',
	dateInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'date',
		placeholder: 'Insira data de nascimento',
	},
	emailMvNameLabel: 'Email',
	emailMvInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Email(google)',
	},
	// emailGoogleNameLabel: 'Email',
	// emailGoogleInputProps: {
	// 	name: 'confirm_password',
	// 	id: 'confirm_password',
	// 	type: 'text',
	// 	placeholder: 'Email(google)',
	// },
	telefoneFixoLabel: 'Telefone',
	telefoneFixoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Telefone fixo',
	},
	celularLabel: 'Celular',
	celularInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe celular',
	},
	perfilLabel: 'Perfil',
	perfilInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'CONSULTOR',
	},
	statusLabel: 'Status',
	statusInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Status',
	},
	bancoLabel: 'Banco',
	bancoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o banco',
	},
	agenciaLabel: 'Agencia',
	agenciaInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe a agencia',
	},
	tipoContaLabel: 'Tipo de conta',
	tipoContaInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'MEI/CLT',
	},
	contaLabel: 'Conta',
	contaInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe a conta',
	},
	enderecoLabel: 'Endereço',
	enderecoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o endereço',
	},
	numeroLabel: 'Numero',
	numeroInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Numero',
	},
	complementoLabel: 'Complemento',
	complementoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o complemento',
	},
	bairroLabel: 'Bairro',
	bairroInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o bairro',
	},
	estadoLabel: 'Estado',
	estadoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o estado',
	},
	cidadeLabel: 'Cidade',
	cidadeInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe a cidade',
	},
	parceiroLabel: 'Parceiro',
	parceiroInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'text',
		placeholder: 'Informe o parceiro',
	},
	fotoLabel: 'Adicione uma foto',
	fotoInputProps: {
		name: 'confirm_password',
		id: 'confirm_password',
		type: 'file',
		// placeholder: 'Adicione uma foto sua',
	},
	btnLabelSubmit: 'Salvar',
	btnLabelCancel: 'Cancelar',
};

export default FormUser;
