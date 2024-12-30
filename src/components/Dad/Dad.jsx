import Brodher from "../Brodher/Brodher";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({ asset }) => {
	return (
		<div>
			<h2>Dad</h2>
			<section className="flex">
				<MySelf asset={asset}></MySelf>
				<Brodher></Brodher>
				<Sister></Sister>
			</section>
		</div>
	);
};

export default Dad;
