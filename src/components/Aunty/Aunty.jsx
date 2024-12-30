import Cousin from "../Cousin/Cousin";

const Aunty = () => {
	return (
		<div>
			<h2>Aunty</h2>
			<section className="flex">
				<Cousin name={"Sadiya"}></Cousin>
				<Cousin name={"Joy"}></Cousin>
			</section>
		</div>
	);
};

export default Aunty;
