import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Route } from "react-router-dom/dist";
import { Transactions } from "./screens/Transactions";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/transactions" exact element={<Transactions />} />
				{/* <Route path="/profile/:user" exact element={<Profile />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
