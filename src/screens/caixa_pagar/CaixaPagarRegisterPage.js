import React from 'react';
// import { connect } from 'react-redux';
import Form from '../../components/CaixaPagar/CaixaPagarRegisterForm';
import { navigateBack } from '../../lib/utils/navigation';
// import {
// 	notificationActions,
// 	pricesActions,
// 	clientActions,
// 	contractsActions,
// } from '../../store/actions';
import { LoadingContent, Page } from '../../components/Utils/Page';
import PropTypes from '../../lib/utils/propTypes';

class PricesRegisterPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: false,
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	async componentDidMount() {
		const { onGetList, match, onGetClient, onGetContracts } = this.props;

		const { id } = match.params;

		this.setState({
			id,
		});

		// await onGetClient();
		// await onGetContracts({ active: true });

		if (id) {
			// await onGetList({ id: id });
		}
	}

	onSubmit = data => {
		const { onAddPrices, onEditPrices } = this.props;
		const { id } = this.state;

		if (id) {
			// onEditPrices(data, id);
		} else {
			// onAddPrices(data);
		}
	};

	render() {
		const { id } = this.state;

		const { prices, contracts, client, loading } = this.props;

		//CLIENTES
		let clientOptions = [];
		// if (client != false) {
		// 	clientOptions = client.map(index => ({
		// 		id: index.id,
		// 		name: index.client,
		// 	}));
		// }

		//CONTRACTS
		let contractsOptions = [];
		// if (contracts != false) {
		// 	contractsOptions = contracts.map(index => ({
		// 		id: index.id,
		// 		name: index.contracts_cod,
		// 	}));
		// }

		return (
			<Page
				className="user-register"
				title={id ? 'Editar' : 'Adicionar'}
				parentBreadcrumbs="conta-a-pagar"
				pathParent="/conta/pagar"
				breadcrumbs={[
					{
						name: id ? 'Editar contas' : 'Adicionar contas',
						active: true,
					},
				]}>
				<LoadingContent
					loading={id ? !prices || !client || !contracts : loading}>
					<Form
						// list={prices[0]}
						client={clientOptions || []}
						contracts={contractsOptions || []}
						onSubmit={data => this.onSubmit(data)}
						handleNavigation={() => navigateBack()}
					/>
				</LoadingContent>
			</Page>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		loading: state.api.loading,
// 		prices: state.prices.list,
// 		contracts: state.contracts.list,
// 		client: state.client.list,
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onGetList: id => dispatch(pricesActions.getPrices(id)),
// 		onAddNotification: (message, level) =>
// 			dispatch(notificationActions.addNotification(message, level)),
// 		onAddPrices: data => dispatch(pricesActions.insertPrices(data)),
// 		onEditPrices: (data, id) =>
// 			dispatch(pricesActions.updatePrices(data, id)),
// 		onGetClient: id => dispatch(clientActions.getClient(id)),
// 		onGetContracts: id => dispatch(contractsActions.getContracts(id)),
// 	};
// };

PricesRegisterPage.propTypes = {
	onAddNotification: PropTypes.func.isRequired,
	onAddPrices: PropTypes.func.isRequired,
	onEditPrices: PropTypes.func.isRequired,
	onGetList: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({ id: PropTypes.string }),
	}).isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(PricesRegisterPage);
export default PricesRegisterPage;
