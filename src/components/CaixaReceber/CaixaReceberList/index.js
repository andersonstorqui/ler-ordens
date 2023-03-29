import PropTypes from 'prop-types';
import React from 'react';
import { Fab } from 'react-tiny-fab';
import { MdAdd } from 'react-icons/md';
import Filter from './Filter';
import StickyHeadTable from '../../Utils/TableContaReceber/Table';
import DataTable from '../../Utils/DataTable';

class CaixaReceberList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { resetPaginationToggle: false };
	}

	render() {
		const {
			data,
			columns,
			handleNavigation,
			onSubmitFilter,
			cleanFilter,
			loadingFilter,
			companies,
		} = this.props;

		const { resetPaginationToggle } = this.state;

		return (
			<div>
				<Filter
					onSubmit={values => {
						// onSubmitFilter(values);
						this.setState({
							resetPaginationToggle: !resetPaginationToggle,
						});
					}}
					clearQuery={() => cleanFilter()}
					companies={companies}
				/>
				<StickyHeadTable />
				<DataTable
					loading={loadingFilter}
					columns={columns}
					data={data}
					paginationResetDefaultPage={resetPaginationToggle}
					pagination={data.length > 10}
				/>
				<Fab
					mainButtonStyles={{
						backgroundColor: '#000000',
					}}
					position={{ bottom: 15, right: 0 }}
					event="click"
					icon={<MdAdd />}
					onClick={() => handleNavigation('/add/caixa/receber')}
					text="Adicionar conta a receber"
				/>
			</div>
		);
	}
}

CaixaReceberList.propTypes = {
	handleNavigation: PropTypes.func.isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSubmitFilter: PropTypes.func.isRequired,
	cleanFilter: PropTypes.func.isRequired,
	companies: PropTypes.arrayOf(PropTypes.object).isRequired,
	loadingFilter: PropTypes.bool.isRequired,
};

CaixaReceberList.defaultProps = {};

export default CaixaReceberList;
