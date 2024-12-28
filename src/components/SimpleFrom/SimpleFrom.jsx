const SimpleFrom = () => {
    const handelSubmit = (e) => {
        e.preventDefault(); // page er majhe kno rokom relod hobe na
        console.log('post submite');
        console.log(e.target.email.value);
        console.log(e.target.name.value);
        console.log(e.target.phone.value);
        
	};
	return (
		<div> 
			<form onSubmit={handelSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="phone" />
                <br />
				<input type="email" name="email" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default SimpleFrom;