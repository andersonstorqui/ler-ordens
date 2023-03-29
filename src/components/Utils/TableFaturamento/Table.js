import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
	{ id: 'autor', label: 'Autor', minWidth: 70 },
	{ id: 'tipo', label: 'Tipo pendência', minWidth: 50 },
	{
		id: 'inclusao',
		label: 'Inclusão',
		minWidth: 60,
		align: 'right',
		format: value => value.toLocaleString('en-US'),
	},
	{
		id: 'prazo',
		label: 'Prazo',
		minWidth: 60,
		align: 'right',
		format: value => value.toLocaleString('en-US'),
	},
	{
		id: 'responsavel',
		label: 'Responsável',
		minWidth: 60,
		align: 'right',
		format: value => value.toFixed(2),
	},
	{ id: 'projeto', label: 'Projeto', minWidth: 80 },
	{ id: 'problema', label: 'Problema', minWidth: 80 },
	{ id: 'solucao', label: 'Solução', minWidth: 80 },
	{ id: 'turno', label: 'T', minWidth: 40 },
	{ id: 'fechamento', label: 'Fechamento', minWidth: 80 },
];

function createData(
	autor,
	tipo,
	inclusao,
	prazo,
	responsavel,
	projeto,
	problema,
	solucao,
	turno,
	fechamento,
) {
	// const density = population / size;
	return {
		autor,
		tipo,
		inclusao,
		prazo,
		responsavel,
		projeto,
		problema,
		solucao,
		turno,
		fechamento,
	};
}

const rows = [
	createData(
		'Artur',
		'CONSULTOR',
		'26/08/2022',
		'27/08/2022',
		'Artur',
		'ERP MV',
		'Teste',
		'Teste',
		'Dia',
		'Fechamento Teste',
	),
	createData(
		'Gabriele Dani',
		'DESENVOLVIMENTO',
		'26/08/2022',
		'27/08/2022',
		'Gabriele Dani',
		'ERP MV',
		'Teste',
		'Teste',
		'Dia',
		'Fechamento Teste',
	),
];

export default function StickyHeadTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage,
							)
							.map(row => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.code}>
										{columns.map(column => {
											const value = row[column.id];
											return (
												<TableCell
													key={column.id}
													align={column.align}>
													{column.format &&
													typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
