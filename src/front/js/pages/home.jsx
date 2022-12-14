import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Grid container component="main" sx={{ height: "93vh" }}>
				<Grid
					item
					xs={12}
					sm={8}
					md={6}
					component={Paper}
					elevation={6}
					square>
					<Box
						sx={{
							my: "auto",
							mx: "auto",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							minHeight: "93vh",
						}}>
						<Typography variant="h1" component="h2">
							Poupa Mais
						</Typography>
						<Typography variant="h4" component="h2">
							Descobre agora os preços mais baratos
						</Typography>
						<Typography>
							*apenas disponivel para Auchan, Continente e
							Minipreço
						</Typography>
						<Box
							sx={{
								my: 8,
								mx: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<Button
								variant="contained"
								size="large"
								component={RouterLink}
								to="/search">
								descobre já
							</Button>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={false}
					sm={4}
					md={6}
					sx={{
						backgroundImage:
							"url(https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			</Grid>
		</>
	);
};
export default Home;