import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { InputLabel, SelectLabel } from '../../../Utils';
import { ButtonsFilter, CollapseFilter } from '../../../Utils/Filter';
import { removeEmpty } from '../../../../lib/utils/functions';
import { statusList } from '../../../../lib/utils/selects';
import PropTypes from '../../../../lib/utils/propTypes';

const FilterPendenciasTable = ({
	pricesLabel,
	pricesInputProps,
	onSubmit,
	clearQuery,
	companies,
	statusLabel,
	statusInputProps,
	autorInputProps,
	autorLabel,
	tipoLabel,
	tipoInputProps,
	inclusaoLabel,
	inclusaoInputProps,
	prazoLabel,
	prazoInputProps,
	responsavelLabel,
	responsavelInputProps,
	projetoLabel,
	projetoInputProps,
	problemaLabel,
	problemaInputProps,
	solucaoLabel,
	solucaoInputProps,
	fechamentoLabel,
	fechamentoInputProps,
	...restProps
}) => {
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: { active: 'true' },
	});

	const [value, setReactSelectValue] = useState({ selectedOption: [] });
	const [status, setStatus] = useState({ selectedOption: statusList[1] });

	const onSubmitForm = data => {
		let values = data;
		values = removeEmpty(values);
		onSubmit(values);
	};

	const handleChangeStatus = selectedOption => {
		setValue('active', selectedOption.id);
		setStatus({ selectedOption });
	};

	React.useEffect(() => {
		register({ name: 'active' });
	}, [register]);

	const clear = () => {
		setValue('active', statusList[1].id);
		setStatus({ selectedOption: statusList[1] });
		setReactSelectValue({ selectedOption: [] });
		clearQuery();
	};

	return (
		<div {...restProps} className="mb-3">
			<CollapseFilter open>
				<form onSubmit={handleSubmit(onSubmitForm)}>
					<Row>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={autorLabel}
								{...autorInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={tipoLabel}
								{...tipoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={inclusaoLabel}
								{...inclusaoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={prazoLabel}
								{...prazoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={responsavelLabel}
								{...responsavelInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={projetoLabel}
								{...projetoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={problemaLabel}
								{...problemaInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={solucaoLabel}
								{...solucaoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<InputLabel
								label={fechamentoLabel}
								{...fechamentoInputProps}
								innerRef={register}
							/>
						</Col>
						<Col xl={6} lg={12} md={12}>
							<SelectLabel
								label={statusLabel}
								{...statusInputProps}
								options={statusList}
								onChange={handleChangeStatus}
								value={status.selectedOption}
							/>
						</Col>
					</Row>
					<ButtonsFilter onClickClean={() => clear()} />
				</form>
			</CollapseFilter>
		</div>
	);
};

FilterPendenciasTable.propTypes = {
	pricesLabel: PropTypes.string,
	pricesInputProps: PropTypes.shape({}),
	statusLabel: PropTypes.string,
	statusInputProps: PropTypes.shape({}),
	autorLabel: PropTypes.string,
	autorInputProps: PropTypes.shape({}),
	tipoLabel: PropTypes.string,
	tipoInputProps: PropTypes.shape({}),
	prazoLabel: PropTypes.string,
	prazoInputProps: PropTypes.shape({}),
	inclusaoLabel: PropTypes.string,
	inclusaoInputProps: PropTypes.shape({}),
	responsavelLabel: PropTypes.string,
	responsavelInputProps: PropTypes.shape({}),
	projetoLabel: PropTypes.string,
	projetoInputProps: PropTypes.shape({}),
	problemaLabel: PropTypes.string,
	problemaInputProps: PropTypes.shape({}),
	solucaoLabel: PropTypes.string,
	solucaoInputProps: PropTypes.shape({}),
	fechamentoLabel: PropTypes.string,
	fechamentoInputProps: PropTypes.shape({}),
	onSubmit: PropTypes.func.isRequired,
	clearQuery: PropTypes.func.isRequired,
};

FilterPendenciasTable.defaultProps = {
	autorLabel: 'Autor',
	autorInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por autor',
	},
	tipoLabel: 'Tipo de pendência',
	tipoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por pendência',
	},
	inclusaoLabel: 'Inclusão',
	inclusaoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por inclusão',
	},
	responsavelLabel: 'Responsavel',
	responsavelInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por responsavel',
	},
	projetoLabel: 'Projeto',
	projetoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por projeto',
	},
	problemaLabel: 'Problema',
	problemaInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por problema',
	},
	solucaoLabel: 'Solução',
	solucaoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por solução',
	},
	fechamentoLabel: 'Fechamento',
	fechamentoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por fechamento',
	},
	statusLabel: 'Status',
	statusInputProps: {
		name: 'active',
		id: 'active',
		placeholder: 'selecione um status',
	},
	prazoLabel: 'Prazo',
	prazoInputProps: {
		name: 'prices',
		id: 'prices',
		placeholder: 'Pesquise por prazo',
	},
};

export default FilterPendenciasTable;
