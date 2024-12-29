//btn er kketrea props er modde likhete hobe*
const ReusableFrom = ({
	fromTitel,
	handelSubmit,
	submuitBtnText = "Submit",
	children,
}) => {
	const handelLocalSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: e.target.name.valu,
			email: e.target.email.valu,
			password: e.target.password.value,
		};
		handelLocalSubmit(data);
	};
	return (
		<div>
			{children}
			{/* <h2>{fromTitel}</h2> */}
			<form onSubmit={handelSubmit}>
				<input type="text" name="name" />
				<br />
				<input type="password" name="password" />
				<br />
				<input type="email" name="email" />
				<br />
				<input type="submit" value={fromTitel} />
			</form>
		</div>
	);
};

export default ReusableFrom;
