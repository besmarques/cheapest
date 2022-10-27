import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const Search = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Grid container component="main" sx={{ height: "93vh" }}>
				<Grid
					item
					xs={12}
					sm={8}
					md={2}
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
				<Grid item xs={false} sm={4} md={10}>
					asdasd
				</Grid>
			</Grid>
		</>
	);
};
export default Search;
