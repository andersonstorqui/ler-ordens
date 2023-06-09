import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
	<Box
		component="span"
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
		•
	</Box>
);

export default function CardSaldoAtual() {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
				<CardActions>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						gutterBottom>
						Conta: Itau
					</Typography>
				</CardActions>
				<CardActions>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						gutterBottom>
						Saldo atual: R$100.000
					</Typography>
				</CardActions>
				{/* <Typography variant="h5" component="div">
					be{bull}nev{bull}o{bull}lent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography> */}
			</CardContent>
			{/* <CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
}
