import { useContext } from "react";
import { MonyContext } from "../Grandpa/Grandpa";

const Brodher = () => {
	const [money] = useContext(MonyContext);
	return (
		<div>
            <h2>Brodher</h2>
            <h4>Grandpa :{money}</h4>
		</div>
	);
};

export default Brodher;
