import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.scss";
// import { useNavigate } from 'react-router-dom';

export default function Footer() {
	// const navigate = useNavigate();

	// const Homepage = () => {
	// 	navigate("/");
	// }

	const { timerId } = useSelector((state: State) => state.time);

	return (
		<div className={`bottom-area ${timerId ? "hidden" : ""}`}>
			<span className="hint">
				<kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
			</span>
			<span className="hint">
				<kbd>Tab</kbd> to restart test
			</span>
			{/* <div>
				<button className="btn"
					onClick={Homepage}>Home
				</button>
			</div> */}
		</div>
	);
}
