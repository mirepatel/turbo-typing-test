import React from 'react';
// import ReactDOM from 'react-dom';
import HomepageSection from "HomepageSection.js";
import TypingTestPallet from "TypingTestPallet.tsx";
import Register from 'register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
	return (
		<>
			<Auth0Provider
				domain={domain}
				clientId={clientId}
				redirectUri={window.location.origin}>
				<Router>
					<Routes>
						<Route exact path="/" element={<HomepageSection />} />
						<Route exact path="/TypingTestPallet" element={<TypingTestPallet />} />
						<Route exact path="/Register" element={<Register />} />
					</Routes>
				</Router>
			</Auth0Provider>
		</>
	);
};

export default App;