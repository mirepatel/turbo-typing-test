import "./index.scss";
import MainSection from 'TypingTestPallet';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export default function Homepage() {

	const { isLoading } = useAuth0();

	if (isLoading) return <div style={{fontSize: "50px"}}>Loading...</div>

	return (
		<>
			<div className='section-typingtestpallet'>
				<h1>Turbo Typing Test</h1>
				<p className='homepage-para'>
					Type like Turbo speed fuild running into your arms . . .
				</p>
				<div className="homepagesection-subsection">
					<LoginButton />
					<LogoutButton />
					<MainSection/>
				</div>
			</div>
		</>
	)
}
