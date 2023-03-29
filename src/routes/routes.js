import React from 'react';
import PendenciasPage from '../screens/pendencias/PendenciasPage';
import Authorize from './Authorize';

const DashboardPage = React.lazy(() =>
	import('../screens/dashboard/DashboardPage'),
);
const ProfilePage = React.lazy(() => import('../screens/profile/ProfilePage'));
const ChangePasswordPage = React.lazy(() =>
	import('../screens/profile/ChangePasswordPage'),
);
const UsersPage = React.lazy(() => import('../screens/users/UsersPage'));
const UserRegisterPage = React.lazy(() =>
	import('../screens/users/UserRegisterPage'),
);
const UserPermissionsPage = React.lazy(() =>
	import('../screens/users/UserPermissionsPage'),
);
const HelpPage = React.lazy(() => import('../screens/help/HelpPage'));

const TipoPendecia = React.lazy(() =>
	import('../screens/tipo_pendencia/tipo_pendenciaPage'),
);

const TipoPendeciaRegister = React.lazy(() =>
	import('../screens/tipo_pendencia/tipo_pendenciaRegister'),
);

const PendeciasTablePage = React.lazy(() =>
	import('../screens/pendencias/PendenciasPage'),
);

const PendeciasTableRegister = React.lazy(() =>
	import('../screens/pendencias/PendenciasRegisterPage'),
);

const FaturamentoPage = React.lazy(() =>
	import('../screens/faturamento/FaturamentoPage'),
);

const FaturamentoRegisterPage = React.lazy(() =>
	import('../screens/faturamento/FaturamentoRegisterPage'),
);

const CaixaPagarPage = React.lazy(() =>
	import('../screens/caixa_pagar/CaixaPagarPage'),
);

const CaixaPagarRegisterPage = React.lazy(() =>
	import('../screens/caixa_pagar/CaixaPagarRegisterPage'),
);

const CaixaReceberPage = React.lazy(() =>
	import('../screens/caixa_receber/CaixaReceberPage'),
);

const CaixaReceberRegisterPage = React.lazy(() =>
	import('../screens/caixa_receber/CaixaReceberRegisterPage'),
);
const CaixaFisicoPage = React.lazy(() =>
	import('../screens/caixaFisico/CaixaFisicoPage'),
);

const CaixaFisicoRegisterPage = React.lazy(() =>
	import('../screens/caixaFisico/CaixaFisicoRegisterPage'),
);
const User = Authorize(false, ['USER']);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: User(DashboardPage),
		permission: false,
	},
	{
		path: '/ajuda',
		name: 'Help',
		component: User(HelpPage),
		permission: false,
	},
	{
		path: '/perfil',
		name: 'Profile',
		component: User(ProfilePage),
		permission: false,
	},
	{
		path: '/perfil/alterar-senha',
		name: 'ChangePassword',
		component: User(ChangePasswordPage),
		permission: false,
	},

	{
		path: '/usuarios',
		name: 'Users',
		component: User(UsersPage),
		permission: true,
		id: 206,
	},
	{
		path: '/usuarios/adicionar',
		name: 'UserRegister',
		component: User(UserRegisterPage),
		permission: true,
		id: 206,
	},
	{
		path: '/usuarios/editar/:id',
		name: 'UserEdit',
		component: User(UserRegisterPage),
		permission: true,
		id: 206,
	},
	{
		path: '/usuarios/permissoes',
		name: 'UserPermissions',
		component: User(UserPermissionsPage),
		permission: true,
		id: 206,
	},
	// CLIENTE
	{
		path: '/client',
		name: 'UserPermissions',
		component: User(UserPermissionsPage),
		permission: true,
		id: 206,
	},
	{
		path: '/pendencia',
		name: 'Tipo de pendencia',
		component: User(TipoPendecia), //page criada no screen vai aqui
		permission: true,
		id: 206,
	},
	{
		path: '/add/pendencia',
		name: 'Add Tipo de pendencia',
		component: User(TipoPendeciaRegister), //page criada no screen vai aqui
		permission: true,
		id: 206,
	},
	{
		path: '/faturamento',
		name: 'faturamento',
		component: User(FaturamentoPage),
		permission: true,
		id: 204,
	},
	{
		path: '/add/faturamento',
		name: 'faturamento',
		component: User(FaturamentoRegisterPage),
		permission: true,
		id: 204,
	},
	{
		path: '/pendencias',
		name: 'pendencias',
		component: User(PendenciasPage),
		permission: true,
		id: 207,
	},
	{
		path: '/add/pendencias',
		name: 'pendencias',
		component: User(PendeciasTableRegister),
		permission: true,
		id: 207,
	},
	{
		path: '/caixa',
		name: 'caixa',
		component: User(CaixaFisicoPage),
		permission: true,
		id: 208,
	},
	{
		path: '/add/caixa',
		name: 'caixa',
		component: User(CaixaFisicoRegisterPage),
		permission: true,
		id: 208,
	},
	{
		path: '/caixa/receber',
		name: 'caixa-receber',
		component: User(CaixaReceberPage),
		permission: true,
		id: 210,
	},
	{
		path: '/add/caixa/receber',
		name: 'caixa-receber',
		component: User(CaixaReceberRegisterPage),
		permission: true,
		id: 210,
	},
	{
		path: '/caixa/pagar',
		name: 'caixa-pagar',
		component: User(CaixaPagarPage),
		permission: true,
		id: 209,
	},
	{
		path: '/add/caixa/pagar',
		name: 'caixa-pagar',
		component: User(CaixaPagarRegisterPage),
		permission: true,
		id: 209,
	},
];

export default routes;
