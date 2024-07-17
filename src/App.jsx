import { Card } from "./components/Card.jsx";
import { ResultCard } from "./components/ResultCard.jsx";
import { Inicio } from "./layout/Inicio.jsx";
import { preguntasTrivia } from "./preguntas.js";
import { useState } from "react";
import { GlobalStyles } from "@mui/material";
import backgroundImage from "./assets/endless-constellation.svg";
export const App = () => {
	const [contador, setContador] = useState(0);
	const [indice, setIndice] = useState(0);
	const [vista, setVista] = useState(0);

	return (
		<>
			<GlobalStyles
				styles={{
					"#root": {
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "repeat",
						minHeight: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
					},
				}}
			/>
			{vista === 0 && <Inicio setVista={setVista} />}
			{vista === 1 && (
				<Card
					preguntasTrivia={preguntasTrivia[indice]}
					setContador={setContador}
					contador={contador}
					indice={indice}
					setIndice={setIndice}
					total={preguntasTrivia.length}
					setVista={setVista}
				/>
			)}
			{vista === 2 && (
				<ResultCard
					contador={contador}
					setVista={setVista}
					setIndice={setIndice}
					setContador={setContador}
				/>
			)}
		</>
	);
};
