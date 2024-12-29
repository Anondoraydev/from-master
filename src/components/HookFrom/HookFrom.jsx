import useInputState from "../../Hooks/useInputState";

const HookFrom = () => {
	// const [name, handelNameChange] = useInputState("Ronjoni hooked");
	const emailState = useInputState("rojoni@gmail.com");
	const handelSubmit = (e) => {
		console.log("from Data", emailState.value);
		e.preventDefault(); // page er majhe kno rokom relod hobe na
	};
	// *********************************
	// const handelSubmit = (e) => {
	// 	console.log("from Data", name);
	// 	e.preventDefault(); // page er majhe kno rokom relod hobe na
    // };

    // ************************
	return (
		<div>
			<form onSubmit={handelSubmit}>
				{/* coustom Hook From change */}
				{/* <input
					value={name}
					onChange={handelNameChange}
					type="text"
					name="name"
				/> */}
				<br />
				{/* 
                1. (...) valur man k copy kore neya hoy
                */}
				<input {...emailState} type="email" name="email" />
				<br />
				<input type="password" name="password" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default HookFrom;
