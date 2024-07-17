import { Box, Typography, Button } from "@mui/material";

export const ResultCard = ({ contador, setVista, setIndice, setContador }) => {
	const handleReset = () => {
		setVista(1);
		setContador(0);
		setIndice(0);
	};

	return (
		<Box
			sx={{
				width: { xs: "100%", md: "50%" },
				marginInline: { xs: "10px" },
				paddingBlock: 4,
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				alignItems: "center",
				gap: "20px",
			}}
		>
			<Typography variant="h4">¡Gracias por participar!</Typography>

			<Typography sx={{ fontSize: 25 }}>
				Tu resultado final es : {contador}
			</Typography>

			<Typography>¿Quieres intentarlo de nuevo?</Typography>

			<Button
				variant="contained"
				onClick={handleReset}
				sx={{
					margin: "auto",
					color: "white",
					fontSize: { md: "1rem" },
					backgroundColor: "#9471b2",
					"&:hover": { backgroundColor: "#ab92c0" },
				}}
			>
				Reiniciar
			</Button>
		</Box>
	);
};
