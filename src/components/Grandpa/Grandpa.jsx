import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Granpa.css";

const Grandpa = () => {
	return (
		<div className="granpa ">
			<h2>Grandpa</h2>
			<section className="flex">
				<Dad></Dad>
				<Uncle></Uncle>
				<Aunty></Aunty>
			</section>
		</div>
	);
};

export default Grandpa;
