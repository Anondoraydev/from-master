import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Granpa.css";

export const AssetContext = createContext("gold"); //export context
export const MonyContext = createContext(1000);

const Grandpa = () => {
	const asset = "Diamond";
	const [money, setMoney] = useState(1000);
	return (
		<div className="granpa ">
			<h2>Grandpa</h2>
			<h2>Net :{money}</h2>
			<MonyContext.Provider value={[money, setMoney]}>
				<AssetContext.Provider value="gold">
					{/*context value add*/}
					<section className="flex">
						<Dad asset={asset}></Dad>
						<Uncle asset={asset}></Uncle>
						<Aunty></Aunty>
					</section>
				</AssetContext.Provider>
			</MonyContext.Provider>
		</div>
	);
};

export default Grandpa;

/*
1. create context and export
2.add provider for the context with a value. value could be anything 
3.useContext to access value in the context API 
*/
