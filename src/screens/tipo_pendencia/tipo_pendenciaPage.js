import React from 'react';
// import { connect } from 'react-redux';
import { navigate } from '../../lib/utils/navigation';
// import { pricesActions } from '../../store/actions';
import { LoadingContent, Page } from '../../components/Utils/Page';
import ActiveDeleteEdit from '../../components/Utils/TablesRow/ActiveDeleteEdit';
import { ModalDelete } from '../../components/Utils/Modal';
import PropTypes from '../../lib/utils/propTypes';
import PendenciaList from '../../components/Pendencia/PendenciaList';

class Tipo_pendencia extends React.Component {
	constructor(props) {
		super(props);

		const { onActiveDesactivePrice, onSelect } = this.props;

		this.state = {
			columns: [
				{
					name: 'Id',
					selector: 'id',
					sortable: true,
					width: '15%',
				},
				{
					name: 'Preço Base',
					selector: 'price_base',
					sortable: true,
					width: '35%',
				},
				{
					name: 'Preço Reajuste',
					selector: 'price_reajust',
					sortable: true,
					width: '35%',
					cell: row => 'hello',
				},
				{
					name: 'Ações',
					selector: 'active',
					width: '15%',
					cell: row => (
						<ActiveDeleteEdit
							row={row}
							onSelect={value => onSelect(value)}
							route="pendencia"
							handleNavigation={page => navigate(page)}
							changeValue={prices =>
								onActiveDesactivePrice(prices)
							}
						/>
					),
				},
			],
		};
	}

	async componentDidMount() {
		const { onGetList } = this.props;
		// await onGetList('active=true');
	}

	render() {
		const { list, loading, onGetList, onDelete, select } = this.props;
		const { columns } = this.state;

		return (
			<Page
				className="users"
				title="Tipo pendencias"
				breadcrumbs={[{ name: 'Tipo pendencias', active: true }]}>
				<LoadingContent loading={false}>
					<PendenciaList
						data={list || []}
						columns={columns}
						handleNavigation={page => navigate(page)}
						loadingFilter={loading}
						onSubmitFilter={data => onGetList(data)}
					/>
					<ModalDelete
						name={select ? select.prices : ''}
						onSubmit={() => onDelete(select.id)}
					/>
				</LoadingContent>
			</Page>
		);
	}
}

// const mapStateToProps = state => ({
// 	list: state.prices.list,
// 	loading: state.api.loading,
// 	select: state.prices.select
// });

const mapDispatchToProps = dispatch => ({
	// onGetList: query => dispatch(pricesActions.getPrices(query)),
	// onSelect: query => dispatch(pricesActions.select(query)),
	// onActiveDesactivePrice: query => dispatch(pricesActions.activeOrDesactivePrices(query)),
	// onDelete: query => dispatch(pricesActions.deletePrices(query)),
});

Tipo_pendencia.propTypes = {
	onActiveDesactivePrice: PropTypes.func.isRequired,
	onGetList: PropTypes.func.isRequired,
	list: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.arrayOf(PropTypes.object),
	]).isRequired,
	loading: PropTypes.bool.isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(Tipo_pendencia);
export default Tipo_pendencia;