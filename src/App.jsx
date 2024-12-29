import "./App.css";
// import ReusableFrom from "./components/ReusableFrom/ReusableFrom";
// import HookFrom from "./components/HookFrom/HookFrom";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleFrom from "./components/SimpleFrom/SimpleFrom";
// import StateFullFrom from "./components/StateFullFrom/StateFullFrom";

function App() {
	// const handelSingUpSubmit = (data) => {
	// 	data.preventDefault();
	// 	console.log("sing up", data);
	// };
	// const handelFromUpdateSubmit = (data) => {
	// 	data.preventDefault();
	// 	console.log("Update data", data);
	// };
	return (
		<>
			<h1>Form Master</h1>
			{/* <SimpleFrom></SimpleFrom>  */}
			{/* <StateFullFrom></StateFullFrom> */}
			{/* <RefForm></RefForm> */}
			{/* <HookFrom></HookFrom> */}
			{/* <ReusableFrom
				fromTitel={"Sing Up"}
				handelSubmit={handelSingUpSubmit}>
				<h2>Sing Up</h2>
				<p>Please Sing up right now</p>
				</ReusableFrom> */}
			{/*btn er update man change korte hobe*/}
			<ReusableFrom
				fromTitel={"From Update"}
				handelSubmit={handelFromUpdateSubmit}
				fromTitel={"Update"}>
				<h2>Update Profile</h2>
				<p>Always keep your Profile updata</p>
				</ReusableFrom>
		</>
	);
}

export default App;
