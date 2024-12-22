const DynamicPhoto = async (props: any) => {
	
	const url = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${props.params.id}`
	);
	const res = await url.json();
	console.log("SingleAlbumREsponse", res);

	return (
		<h1 className='pl-5 text-5xl'>
			{props.params.id} <br />
			{res.photo} <br />
			{res.author} <br />
		</h1>
	);
};

export default DynamicPhoto;