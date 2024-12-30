import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

 
const Freand = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Freand</h2>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Freand;