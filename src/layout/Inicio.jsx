import { Container, Typography, Button } from "@mui/material";

export const Inicio = ({ setVista }) => {
	return (
		<Container sx={{ textAlign: "center" }}>
			<Typography
				variant="h2"
				component="h1"
				sx={{ fontSize: { md: "7rem" }, paddingBottom: "20px" }}
			>
				Bienvenido!!
			</Typography>
			<Button
				variant="contained"
				onClick={() => setVista(1)}
				sx={{
					fontSize: { md: "1.25rem" },
					backgroundColor: "#9471b2",
					"&:hover": { backgroundColor: "#ab92c0" },
				}}
			>
				¡Comienza el juego!
			</Button>
		</Container>
	);
};
