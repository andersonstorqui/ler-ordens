import {
	MdBuild,
	MdDashboard,
	MdApps,
	MdOutlinePersonPinCircle,
	MdOutlineOutbond,
	MdBusiness,
	MdSegment,
	MdOutlineVerticalDistribute,
	MdViewModule,
	MdAttachMoney,
} from 'react-icons/md';
import {
	FaUserAlt,
	FaSuitcase,
	FaFileContract,
	FaMountain,
} from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { RiPriceTag3Fill } from 'react-icons/ri';

export const navItems = [
	{
		to: '/',
		name: 'Dashboard',
		exact: true,
		Icon: MdDashboard,
	},
];

export const navAux = [
	{
		to: '/usuarios',
		name: 'Usuários',
		exact: false,
		IconSub: FaUserAlt,
		id: 206,
	},
	{
		to: '/pendencia',
		name: 'Tipo de pendencia',
		exact: false,
		IconSub: FaUserAlt,
		id: 206,
	},
];

export const navApp = [
	{
		to: '/client',
		name: 'Clientes Modelo vencedor',
		exact: false,
		IconSub: MdApps,
		id: 157,
	},
	{
		to: '/faturamento',
		name: 'faturamento',
		exact: false,
		IconSub: MdBusiness,
		id: 204,
	},
	{
		to: '/pendencias',
		name: 'pendencias',
		exact: false,
		IconSub: MdBusiness,
		id: 207,
	},
	{
		to: '/caixa',
		name: 'Caixa',
		exact: false,
		IconSub: MdViewModule,
		id: 208,
	},
	{
		to: '/caixa/receber',
		name: 'Conta A Receber',
		exact: false,
		IconSub: MdViewModule,
		id: 210,
	},
	{
		to: '/caixa/pagar',
		name: 'Conta A Pagar',
		exact: false,
		IconSub: MdViewModule,
		id: 209,
	},
];

export const routes = [
	{
		name: 'Auxiliares',
		icon: MdBuild,
		submodules: navAux,
	},
	{
		name: 'Aplicações',
		icon: MdApps,
		submodules: navApp,
	},
	{
		name: 'Finanças',
		icon: MdAttachMoney,
		submodules: navApp,
	},
];
