import { useState } from "react";

const StateFullFrom = () => {
	const [name, setName] = useState("I am ");
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [error, setError] = useState("");

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(email, password, name);
		if (password.length < 6) {
			setError("password must be 6 crectrs");
		} else {
			setError("");
		}
	};
	const handelNameChange = (e) => {
		setName(e.target.value);
	};
	const hendelEmailChange = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};
	const handelPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	return (
		<div>
			<form onSubmit={handelSubmit}>
				<input
					value={name}
					onChange={handelNameChange}
					type="text"
					name="name"
				/>
				<br />
				<input
					onChange={handelPasswordChange}
					type="text"
					name="password"
					required
				/>{" "}
				{/*required use korle kno man na diye sabmit korte parbo na */}
				<br />
				<input onChange={hendelEmailChange} type="email" name="email" />
				<br />
				<input type="submit" value="Submit" />
				{error && <p>password must be 6 crectars</p>}
			</form>
		</div>
	);
};

export default StateFullFrom;
