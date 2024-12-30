import Freand from "../Freand/Freand";
import Special from "../Special/Special";

 

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section className="flex">
                {asset && <Special asset={asset}></Special>}
                {name === 'Joy' && <Freand></Freand> }
            </section>
        </div>
    );
};

export default Cousin;