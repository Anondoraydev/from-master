import { useEffect, useRef } from "react";

const RefForm = () => {
	const nameRaf = useRef(null);
	const passwordRef = useRef(null);
	const emailRef = useRef(null);

	useEffect(() => {
		nameRaf.current.focus();  //refash korar por o carsol sei input box er moddte thakbe
	}, []);

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(nameRaf.current.value);
		console.log(passwordRef.current.value);
		console.log(emailRef.current.value);
	};
	return (
		<div>
			<form onSubmit={handelSubmit}>
				<input ref={nameRaf} type="text" name="name" />
				<br />
				<input ref={passwordRef} type="text" name="password" />
				<br />
				<input ref={emailRef} defaultValue={'anondo554@gmail.com'} type="email" name="email" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default RefForm;
