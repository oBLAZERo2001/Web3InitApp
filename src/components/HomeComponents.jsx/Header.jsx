import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Box
				sx={{ display: "flex", alignItems: "flex-end", cursor: "pointer" }}
				onClick={() => {
					navigate("/");
				}}
			>
				<Box
					sx={{
						width: "50px",
						heigth: "50px",
					}}
				>
					<img src="/logo.svg.png" alt="" width="100%" heigth="100%" />
				</Box>
				<Box sx={{ ml: 2, fontSize: "25px" }}>Neo Disperse</Box>
			</Box>
			<Box
				onClick={() => {
					navigate("/transactions");
				}}
				sx={{
					display: "flex",
					alignItems: "flex-end",
					cursor: "pointer",
					textDecoration: "underline",
					textUnderlineOffset: "4px",
				}}
			>
				view transactions 📃
			</Box>
		</Box>
	);
}
