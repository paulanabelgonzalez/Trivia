import {
	Alert,
	Button,
	Box,
	Container,
	Typography,
	FormControl,
	Modal,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

import { useState } from "react";

export const Card = ({
	preguntasTrivia,
	setContador,
	contador,
	indice,
	setIndice,
	setVista,
	total,
}) => {
	const { pregunta, opciones, respuestaCorrecta, explicacion } =
		preguntasTrivia;
	const [respuesta, setRespuesta] = useState("");
	const [alerta, setAlerta] = useState(false);
	const [mensaje, setMensaje] = useState(false);
	const [open, setOpen] = useState(false);
	const [informacion, setInformacion] = useState("");

	const handleRespuesta = (e) => {
		setRespuesta(e.target.value);
		setAlerta(false);
	};

	const handleCheckAnswer = () => {
		if (respuesta === "") {
			setAlerta(true);
		} else {
			if (respuestaCorrecta === respuesta) {
				setMensaje(true);
				setOpen(true);
				setInformacion("");
				setContador(contador + 1);
			} else {
				setMensaje(false);
				setInformacion(explicacion);
				setOpen(true);
			}
		}
	};
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: { xs: "95%", md: "40%" },
		minHeight: "250px",
		bgcolor: "#fff4e5",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItem: "center",
		borderRadius: 2,
	};

	const handleClose = () => {
		setRespuesta("");
		setOpen(false);
		if (indice + 1 === total) {
			setVista(2);
		} else {
			setIndice(indice + 1);
		}
	};

	return (
		<Container
			sx={{
				backgroundColor: "#e3f1ff2e",
				width: { md: "60%" },
				minHeight: 180,
				borderRadius: 2,
				boxShadow: 1,
				paddingInline: 2,
				paddingBlock: 4,
				margin: { xs: "5px", md: "auto" },
				display: "flex",
				gap: 1,
				flexDirection: "column",
			}}
		>
			<Typography
				variant="h4"
				component="h2"
				sx={{ textAlign: "center", paddingBottom: 2, fontSize: 25 }}
			>
				{pregunta}
			</Typography>
			<FormControl>
				<Typography
					id="demo-radio-buttons-group-label"
					sx={{
						color: "white",
						paddingBlock: "5px",
					}}
				>
					Selecciona una Respuesta:
				</Typography>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					name="radio-buttons-group"
					sx={{ color: "white" }}
				>
					<FormControlLabel
						value={opciones[0]}
						control={<Radio sx={{ color: "white" }} />}
						label={opciones[0]}
						onClick={handleRespuesta}
					/>
					<FormControlLabel
						value={opciones[1]}
						control={<Radio sx={{ color: "white" }} />}
						label={opciones[1]}
						onClick={handleRespuesta}
					/>
					<FormControlLabel
						value={opciones[2]}
						control={<Radio sx={{ color: "white" }} />}
						label={opciones[2]}
						onClick={handleRespuesta}
					/>
					<FormControlLabel
						value={opciones[3]}
						control={<Radio sx={{ color: "white" }} />}
						label={opciones[3]}
						onClick={handleRespuesta}
					/>
				</RadioGroup>
			</FormControl>
			<Button
				variant="contained"
				onClick={handleCheckAnswer}
				sx={{
					width: "50%",
					margin: "auto",
					fontSize: { md: "1.25rem" },
					backgroundColor: "#9471b2",
					"&:hover": { backgroundColor: "#ab92c0" },
				}}
			>
				Enviar Respuesta
			</Button>

			{alerta && (
				<Alert severity="warning" sx={{ justifyContent: "center", mt: 2 }}>
					Selecciona una opción
				</Alert>
			)}

			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							component="h2"
							sx={{ color: "#9471b2", fontSize: { xs: "28px", md: "30px" } }}
						>
							Tu respuesta fue...
						</Typography>

						<Box
							id="modal-modal-description"
							sx={{ mt: 2, fontSize: "1.5rem" }}
						>
							{mensaje ? (
								<Typography
									sx={{
										color: "green",
										fontSize: "1.25rem",
									}}
								>
									CORRECTA!!!
								</Typography>
							) : (
								<Typography sx={{ color: "red", fontSize: "1.25rem" }}>
									INCORRECTA
								</Typography>
							)}
						</Box>
						<Typography
							id="modal-modal-description"
							sx={{
								mt: 2,
								width: "100%",
								margin: "auto",
								paddingBlock: "20px",
								fontSize: "17px",
							}}
						>
							{informacion}
						</Typography>
						<Button
							onClick={handleClose}
							sx={{
								color: "white",
								fontSize: { md: "1rem" },
								backgroundColor: "#9471b2",
								"&:hover": { backgroundColor: "#ab92c0" },
								maxWidth: "300px",
								margin: "auto",
								paddingInline: "20px",
							}}
						>
							Siguiente Pregunta
						</Button>
					</Box>
				</Modal>
			</div>
		</Container>
	);
};
