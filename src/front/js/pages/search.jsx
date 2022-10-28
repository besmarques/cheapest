import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

import auchan_logo from "../../img/auchan.png";
import continente_logo from "../../img/continente.png";
import minipreco_logo from "../../img/minipreco.png";

const Search = () => {

	const { store, actions } = useContext(Context);

	const [pesquisa, setPesquisa] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		actions.searchAuchan(pesquisa);
		actions.searchContinente(pesquisa);
		actions.searchMinipreco(pesquisa);
	};

	let obj = [];

	store.dataAuchan
		? store.dataAuchan.map((i) => {
			
				obj.push(i);
		  })
		: "";
	store.dataContinente
		? store.dataContinente.map((i) => {
			
				obj.push(i);
		  })
		: "";
	store.dataMinipreco
		? store.dataMinipreco.map((i) => {
			
				obj.push(i);
		  })
		: "";
	

	
		
	
	

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
							px: 2,
							py: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "top",
							minHeight: "93vh",
						}}>
						<Typography variant="h5" component="h2">
							Pesquisa agora os produtos mais baratos
						</Typography>
						<Typography sx={{ pb: 6 }}>
							*apenas disponivel para Auchan, Continente e
							Minipreço
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								required
								fullWidth
								name="search"
								label="Termos da pesquisa"
								type="text"
								id="search"
								value={pesquisa}
								onChange={(e) => setPesquisa(e.target.value)}
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}>
								Pesquisar
							</Button>
						</form>
					</Box>
				</Grid>
				<Grid item xs={false} sm={4} md={10}>
					<Box
						sx={{
							px: 2,
							py: 4,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",

							minHeight: "93vh",
							minWidth: "70vw",
							
							overflow: "scroll",
						}}>
						{obj
							? obj.map((i) => {

								
									return (
										<Card sx={{ minWidth: 300, mx: 2 }} elevation={6}>
											<CardMedia
												component="img"
												Height="250"
												image={i.image}
												alt={i.title}
												sx={{ mt:6 }}
											/>
											<CardHeader title={i.title} sx={{ minHeight: 200, mx: 1 }}/>
											<CardContent>
												<Typography 
													sx={{ minHeight: 50, mx: 1 }}
													variant="h4"
													color="text.secondary">
													{i.price}
												</Typography>
												<Typography
													sx={{ minHeight: 40, mx: 1 }}
													variant="h5"
													color="text.secondary">
													{i.price_per_unit}
												</Typography>

												<Avatar aria-label="recipe">
													{i.where == "auchan" ? (
														<img
															src={auchan_logo}
															width="30px"
														/>
													) : i.where ==
													  "continente" ? (
														<img
															src={
																continente_logo
															}
															width="30px"
														/>
													) : (
														<img
															src={minipreco_logo}
															width="30px"
														/>
													)}
												</Avatar>
											</CardContent>
										</Card>
									);
							  })
							: ""}
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
export default Search;
