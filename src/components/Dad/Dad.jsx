import Brodher from "../Brodher/Brodher";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

 
const Dad = () => {
    return (
			<div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf></MySelf>
                <Brodher></Brodher>
                <Sister></Sister>
            </section>
			</div>
		);
};

export default Dad;