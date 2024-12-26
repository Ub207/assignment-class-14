const DynamicUser = async (props: any) => {
	
	const url = await fetch(
		`https://jsonplaceholder.typicode.com/users/${props.params.id}`
	);
	const res = await url.json();
	console.log("SingleUserREsponse", res);

	return (
		<h1 className='pl-5 text-5xl'>
			{props.params.id} <br />
			{res.name} <br />
			{res.author} <br />
		</h1>
	);
};

export default DynamicUser;