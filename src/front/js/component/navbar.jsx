import React from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import EuroIcon from "@mui/icons-material/Euro";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
	return (
		<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{
				borderBottom: (theme) => `1px solid ${theme.palette.divider}`, height: "7vh"
			}}
			>
			<Toolbar sx={{ flexWrap: "wrap" }}>
				<EuroIcon sx={{ mr: 2 }} />
				<Typography
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}>
					Cheaper
				</Typography>
				<nav>
					<Link
						variant="button"
						color="text.primary"
						component={RouterLink}
						to="/"
						sx={{ my: 1, mx: 1.5 }}>
						Home
					</Link>
					<Link
						variant="button"
						color="text.primary"
						component={RouterLink}
						to="/search"
						sx={{ my: 1, mx: 1.5 }}>
						<Button variant="contained">Pesquisar</Button>
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
