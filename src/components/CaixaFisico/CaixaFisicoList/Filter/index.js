import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { InputLabel, SelectLabel } from '../../../Utils';
import { ButtonsFilter, CollapseFilter } from '../../../Utils/Filter';
import { removeEmpty } from '../../../../lib/utils/functions';
import { statusList } from '../../../../lib/utils/selects';
import PropTypes from '../../../../lib/utils/propTypes';

const FilterPrices = ({
	pricesLabel,
	pricesInputProps,
	onSubmit,
	clearQuery,
	companies,
	statusLabel,
	statusInputProps,
	intervaloLabel,
	intervaloInputProps,
	bancoLabel,
	bancoInputProps,
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
		// onSubmit(values);
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
						{/* <Col xl={6} lg={12} md={12}>
						 <InputLabel
						 label={pricesLabel}
						 {...pricesInputProps}
						 innerRef={register}
						 />
					 </Col> */}
						<Col xl={6} lg={12} md={12}>
							<SelectLabel
								label={intervaloLabel}
								{...intervaloInputProps}
								options={[
									{ id: 0, name: 'Todos' },
									{ id: 1, name: 'Do mês' },
									{ id: 2, name: 'Da semana' },
									{ id: 3, name: 'Do dia' },
								]}
								onChange={handleChangeStatus}
								// value={status.selectedOption}
							/>
						</Col>

						<Col xl={6} lg={12} md={12}>
							<SelectLabel
								label={bancoLabel}
								{...bancoInputProps}
								options={[
									{ id: 1, name: 'Caixa' },
									{ id: 2, name: 'Itau' },
									{ id: 3, name: 'Sem filtro' },
								]}
								onChange={handleChangeStatus}
								// value={status.selectedOption}
							/>
						</Col>

						<Col xl={6} lg={12} md={12}>
							<SelectLabel
								label={statusLabel}
								{...statusInputProps}
								options={statusList}
								onChange={handleChangeStatus}
								// value={status.selectedOption}
							/>
						</Col>
					</Row>
					<ButtonsFilter onClickClean={() => clear()} />
				</form>
			</CollapseFilter>
		</div>
	);
};

FilterPrices.propTypes = {
	pricesLabel: PropTypes.string,
	pricesInputProps: PropTypes.shape({}),
	statusLabel: PropTypes.string,
	statusInputProps: PropTypes.shape({}),
	intervaloLabel: PropTypes.string,
	intervaloInputProps: PropTypes.shape({}),
	bancoLabel: PropTypes.string,
	bancoInputProps: PropTypes.shape({}),
	onSubmit: PropTypes.func.isRequired,
	clearQuery: PropTypes.func.isRequired,
};

FilterPrices.defaultProps = {
	// pricesLabel: 'Preços',
	// pricesInputProps: {
	// name: '/prices',
	// id: 'prices',
	// placeholder: 'Preços',
	// },
	intervaloLabel: 'Intervalo',
	intervaloInputProps: {
		name: 'prices',
		id: 'prices',
		// placeholder: 'Preços',
	},
	bancoLabel: 'Banco',
	bancoInputProps: {
		name: 'prices',
		id: 'prices',
		// placeholder: 'Preços',
	},
	statusLabel: 'Status',
	statusInputProps: {
		name: 'active',
		id: 'active',
		placeholder: 'selecione um status',
	},
};

export default FilterPrices;
